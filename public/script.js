document.addEventListener('DOMContentLoaded', function () {
    // Initialize heatmap instance
    var heatmapInstance = h337.create({
        container: document.getElementById('heatmap')
    });


    let startTime;

    // Store the start time when the page is loaded
    window.addEventListener('load', function () {
        startTime = Date.now();
    });

    // Track mouse movements
    document.addEventListener('mousemove', function (e) {
        var x = e.pageX;
        var y = e.pageY;
        var timestamp = Date.now() - startTime;

        // Add data point to the heatmap
        heatmapInstance.addData({
            x: x,
            y: y,
            value: 1,
            radius: 30
        });

        // Store data in an array (optional)
        // You can save the data points in an array to convert it to JSON later
        var dataPoint = {
            x: x,
            y: y,
            timestamp: timestamp
        };
        dataPoints.push(dataPoint);
    });

    // Array to store data points (optional)
    var dataPoints = [];

    // Function to convert data points array to JSON
    function convertDataPointsToJson() {
        var json = JSON.stringify(dataPoints);
        return json;
    }

    // Function to download JSON file
    function downloadJsonFile(json, filename) {
        var blob = new Blob([json], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    window.onbeforeunload = confirmExit;
    function confirmExit() {
        var jsonData = convertDataPointsToJson();
        uploadData(jsonData); 
        return false;
    }
    // Example usage to convert and download JSON file
});

async function uploadData(jsonFile) {
    const data = JSON.parse(jsonFile);
    let api = await fetch(`https://us-east-2.aws.data.mongodb-api.com/app/data-iewax/endpoint/Upload`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    let response = await api.json()
    console.log(response);
    return response
}