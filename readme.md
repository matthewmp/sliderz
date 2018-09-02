# Sliderz
Sliderz is a cross-browser responsive slider for recording data into an input field (text/number) while
being free to style as the developer sees fit.

# Screenshots
<img src="https://raw.githubusercontent.com/matthewmp/sliderz/master/sliderz.gif " />

# Installation
To edit and expand existing source code clone repo and:
    
    npm install

To use existing library simply add the "main-bundle" file (located in the dist folder) as a link in you html.  
    
    <script src="main-bundle.js"></script>

Then add a div with the id of "sliderz" inside the body of the html file.
    
    <div id="sliderz"></div>

Add the data attributes to the sliderz div to denote the minimum value, maximum value, and step values to be used.  These are vital to correctly record data.
    
    <div id="sliderz" data-min="1" data-max="20" data-step="1"></div>

Lastly add the id, class, or jQuery selector of the input element that will record the data. The following selector types can be used:
    data-id="id of input element" data-class="class of input element" data-jq="jQuery selector"

If there are more than one selector attribute Sliderz will follow the following order of precedence:
	
	1. jQuery Selector
	
	2. ID
	
	3. Class

Below is the html that has built the slider shown in the gif above:
    
    <div id="sliderz" data-min="1" data-max="6" data-step="1" data-id="inp_val"></div>
	<input type="text" id="inp_val">

The input target will reflect any change to the slider and show it's value.



