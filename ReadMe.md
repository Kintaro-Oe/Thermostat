## Thermostat

#### Makers Academy Week 5 - Learn a new language (Javascript).

The task was to use Javascript and test drive a simple front-end web app that meets the specification below. In addition it should integrate a weather API to enable the weather to be checked for various locations, so that the thermostat can be adjusted accordingly.

## Specifications

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* The thermostat's current energy usage is categorised: < 18 is 'low-usage', < 25 is 'medium-usage', anything else is 'high-usage'.
* Usage categories are reflected with varying text colours.

#### Edge case identified
* Turning power save mode off, allows the temperature to be raised above 25 (up to 32). If power saving mode was re-enabled within this range, the user would be able to increase the temperature indefinitely. A very dangerous feature for a Thermostat! I modified the logic so that, in this scenario the temperature can only be decreased until back within the intended range.

## How to use this app

* Clone this repo
* Navigate to the new repo from the command line and enter: `open Jasmine/index.html`
* This will launch the application within your browser where you can interact with the buttons
* Selecting a city from the drop-down menu will inform you of the temperature of your chosen location
* If power-saving mode is on, you won't be able to increase the temperature higher than 25 degrees. If you turn it off, you can increase up to 32.


<img width="344" alt="Thermostat Screenshot" src="https://user-images.githubusercontent.com/47252337/60282140-26b4a980-98fe-11e9-9a6e-aec542ec3d95.png">


## How to run tests

* Clone this repo
* Navigate to the new repo from the command line and enter: `open Jasmin/SpecRunner.html`
* The unit tests all pass:

<img width="530" alt="Jasmine Screenshot" src="https://user-images.githubusercontent.com/47252337/60282839-c7579900-98ff-11e9-8a74-8437ee790a37.png">


## What I learned from this project

1. How to test drive a simple front-end web app in Javascript
2. How to follow an effective process for learning a new language
3. What tools to translate in order to test and debug in new languages
4. Reading and writing Javascript syntax
5. Introduced to Ajax and jQuery
