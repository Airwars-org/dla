<script>
    export let data = [];
    export let itemName = "";
    export let agencyName = "";

    $: filteredData = data.filter((d) => {
        return (
            (itemName === "" || d["Item Name"] === itemName) &&
            (agencyName === "" || d["Agency Name"] === agencyName)
        );
    });

    $: groupedData = filteredData.reduce((acc, d) => {
        const key = `${d["Agency Name"]}, ${d["Item Name"]}`;
        const date = new Date(d["Ship Date"]).toLocaleDateString();

        if (!acc[key]) acc[key] = { totalValue: 0, dates: {} };
        if (!acc[key].dates[date])
            acc[key].dates[date] = {
                date: d["Ship Date"],
                quantity: 0,
                items: [],
            };

        const acquisitionValue = parseFloat(
            d["Acquisition Value"].replaceAll("US$", ""),
        );

        acc[key].totalValue += acquisitionValue;
        acc[key].dates[date].quantity += parseInt(d["Quantity"]);
        (acc[key].dates[date].acquisitionValue = d["Acquisition Value"]),
            acc[key].dates[date].items.push(d);
        acc[key].agency = d["Agency Name"].toLowerCase();
        acc[key].item = d["Item Name"].toLowerCase();
        acc[key].state = d["State"];

        return acc;
    }, {});

    $: sortedKeys = Object.keys(groupedData)
        .sort((a, b) => {
            return groupedData[b].totalValue - groupedData[a].totalValue;
        })
        .slice(0, 200);
</script>

<div class="timeline">
    {#each sortedKeys as key}
        <div class="group">
            <span class="tiny">
                (Total Value: ${groupedData[key].totalValue})
            </span>
            <div class="header">
                <h3>
                    {groupedData[key].agency}
                    <span class="tiny">({groupedData[key].state})</span>
                </h3>
                <h3>
                    {groupedData[key].item}
                </h3>
            </div>
            {#each Object.keys(groupedData[key].dates) as dateKey}
                <div class="item">
                    <div class="date">
                        {new Date(
                            groupedData[key].dates[dateKey].date,
                        ).toLocaleDateString()}
                    </div>
                    <div
                        class="bar"
                        title={`Quantity: ${groupedData[key].dates[dateKey].quantity}`}
                        style="width: {groupedData[key].dates[dateKey]
                            .quantity * 10}px"
                    ></div>
                    <p class="tiny">
                        ({groupedData[key].dates[dateKey].quantity})
                    </p>
                    <p class="tiny">
                        ({groupedData[key].dates[dateKey].acquisitionValue})
                    </p>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .timeline {
        display: flex;
        flex-direction: column;
        min-width: 800px;
    }

    .group {
        position: sticky;
        top: 0;
        background-color: white;
        box-shadow: inset 0px 5px 5px -5px blue;
        padding: 20px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: 15px;
    }

    .date {
        white-space: nowrap;
        width: 80px;
        color: gray;
    }

    .bar {
        height: 10px;
        background-color: blue;
        max-width: 600px;
    }

    .tiny {
        font-size: 12px;
        color: rgb(118, 118, 118);
    }

    p {
        margin: 0;
    }

    .header {
        margin-bottom: 10px;
    }

    h3 {
        text-transform: capitalize;
        font-weight: 400;
        margin: 0;
    }

    h3:nth-of-type(2) {
        margin-left: 10px;
        /* opacity: 0.6; */
    }
</style>
