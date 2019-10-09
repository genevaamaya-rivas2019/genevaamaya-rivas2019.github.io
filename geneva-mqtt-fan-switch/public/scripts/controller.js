// basic functionalities

//connect
$(document).ready(function() {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt") // connect to broker
    client.on("connect", function() {
        console.log("Successfully connected");
    })
    client.on("message", function(topic, payload) { //triggered and display the message
        console.log([topic, payload].join(","));
    })

    $("#btnOff").click(function(e) {
        e.preventDefault();
        let topic = "geneva/fan/status";
        let payload = "Turned off: " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, payload);
        $("#btn1").attr("disabled", false)
        $("#btn2").attr("disabled", false)
        $("#btn3").attr("disabled", false)
        $("#btnOff").attr("disabled", true)
        $("#message").text("The fan is currently turned off")
    })
    $("#btn1").click(function(e) {
        e.preventDefault();
        let topic = "geneva/fan/status";
        let payload = "Turned at 1: " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, payload);
        $("#btnOff").attr("disabled", false)
        $("#btn2").attr("disabled", false)
        $("#btn3").attr("disabled", false)
        $("#btn1").attr("disabled", true)
        $("#message").text("The fan is currently turned at 1")
    })
    $("#btn2").click(function(e) {
        e.preventDefault();
        let topic = "geneva/fan/status";
        let payload = "Turned at 2: " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, payload);
        $("#btnOff").attr("disabled", false)
        $("#btn1").attr("disabled", false)
        $("#btn3").attr("disabled", false)
        $("#btn2").attr("disabled", true)
        $("#message").text("The fan is currently turned at 2")

    })
    $("#btn3").click(function(e) {
        e.preventDefault();
        let topic = "geneva/fan/status";
        let payload = "Turned at 3: " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, payload);
        $("#btnOff").attr("disabled", false)
        $("#btn1").attr("disabled", false)
        $("#btn2").attr("disabled", false)
        $("#btn3").attr("disabled", true)
        $("#message").text("The fan is currently turned at 3")
    })
})