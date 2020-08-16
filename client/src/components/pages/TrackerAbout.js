import React from 'react'

export default function TrackerAbout() {
    return (
        <React.Fragment>
            <h1 id="about-title">Why Track Yourself?</h1>

            <h2 class="about-header">Stuck in the Apartment</h2>

            <p>Everyone went through it, COVID hit and suddenly everyone was stuck in their house for months. As the weeks passed I filled my time with MOOCs that interested me, notably the wonderful <a href="https://www.edx.org/course/embedded-systems-shape-the-world-microcontroller-i">embedded course</a> by Jonathan Valvano and Ramesh Yerraballi. After some time making some lights blink I was curious what else I could do with these new sensor powers.
            </p>

            <p>After walking to the kitchen for the third snack of the morning, I wondered how did I normally move around my place when not trapped in here? How should I collect the data, and what do I do with it once I have it? That is when I started down this deep rabbit hole</p>

            <h2 class="about-header">The Process</h2>

            <p>This functions as a semi-active log of the decisions made during this project and how it evolved over time.</p>

            <h3 class="process-header">What Sensor?</h3>

            <p>The first question for this project was how should I do the active tracking? I obviously needed some kind of sensor for motion but what would work best?</p>

            <h4>My Requirements</h4>
            <ul>
                <li>Ranges between 6" to 15', adequate for covering doorframes or larger spaces</li>
                <li>Lower power as I ideally want to run these off batteries</li>
                <li>A narrow detection field so I would get less false positives by passing near but not through it</li>
                <li>Decently cheap so I can make a larger qauntity of detectors</li>
            </ul>

            <p>After some research a PIR sensor seemed great for this use, a cheap lower power sensor with reasonable accuracy. The only downsides being that heat could give a false positive (gotta be careful placing near the stove) and many of the common ones have a wide cone of viewing. For the latter that will be addressed later on with some case design considerations and can prove to be ultimately a perk.</p>

            {/* <div class="img-container">
                <img class="img-2" src=""></img>
                <img class="img-2" src=""></img>
            </div> */}

            <h3 class="process-header">What Microcontroller?</h3>

            <p>I will admit, Arduinos can be used for a large number of projects and work great. The thing is that all that capability is not something that I really need, I only have a handful of asks:</p>

            <ul>
                <li>I need some way to send back data collected to a central source, to avoid wires all over my apartment WiFi would be perfect for this end.</li>
                <li>A low-power usage so that I don't need to constantly replace batteries when it is sitting waiting for a signal.</li>
                <li>Small is size, so the case doesn't need to be massive for each of these. It doesn't need to be incredibly small as I want it to be obvious to guests where these are located (not trying to spy on folks!).</li>
                <li>As cheap as I can get with the above requirements</li>
            </ul>

            <p>I had actually messed with a microcontroller ages ago that is perfect to this end, the <a href="https://en.wikipedia.org/wiki/ESP8266">ESP-8266</a>. These babies come in at around $3 from a reputable source and have built in WiFi and low-power modes. Easy to get more if I fry some in the process and perfect for my purpose!</p>

            {/* <div class="img-container">
                <img class="img-2" src=""></img>
                <img class="img-2" src=""></img>
            </div> */}

            <h3 class="process-header">The First Working Circuit!</h3>

            <p>While I ultimately want the device to be battery powered, for early testing purposes I ran off a direct connection to my computer. This also made it much easier to load new software as I iterated. Using online reference I was quickly able to find a good fuctional circuit to connect the PIR and indicator LED.</p>

            <p>Things got a good deal stickier as I looked into low-power settings. The way that functions on a ESP8266 is the microcontroller basically waits in a sleep mode for the correct signal to hit the RST pin, then it will run the full code loaded into the memory. This sleep state takes the current pull from 15mA down to ~20uA, only 0.13% of the active current giving us a massive jump in power performance!</p>

            <p>The tricky aspect is that the ESP8266 only restarts at the end of a single rising edge sent to the RST pin, this means that if the PIR constantly sends a high signal (from say a bunch of movement happening in front of it), it will only start the code at the end of that movement. A wonderful <a href="https://diyprojects.io/esp8266-deep-sleep-mode-test-wake-pir-motion-detector/#.XwDLHnVKgaw">article</a> showed a solution to this problem, a single capacitor put between the PIR and RST pin would fill up quickly and cut off the signal, making the reset trigger quickly. Add in a couple diodes and resistor to make the signals consistent and we end up with this big guy.</p>

            {/* <div class="img-container">
                <img class="img-2" src=""></img>
                <img class="img-2" src=""></img>
            </div> */}

            {/* <h3 class="process-headers">Where to Load the Data?</h3>

            <h3 class="process-headers">Why Not a Whole New Site</h3>

            <h3 class="process-headers">Finally Getting the Sensor Remote!</h3>

            <h3 class="process-headers">More Sensors, More Data</h3>

            <h3 class="process-headers">Building in Machine Learning</h3> */}

        </React.Fragment>
    )
}
