<!DOCTYPE html>
<html lang="en">


	<head>
		<meta charset="utf-8">
		<title>Quotes-SiteStart</title>
		<link rel="icon" type="image/png" href="Res\Favicon.png">
		<link rel="stylesheet" type="text/css" href="Style_Quotes.css">
		<link rel="stylesheet" type="text/css" href="general.css">
	</head>


	<body>

		<?php
		$servername = "localhost";
		$username = "id5913231_sitestart";
		$password = "G|4@NW5Wyx";
		$database = "id5913231_quotes";

		try {
		    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
		    // set the PDO error mode to exception
		    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    } catch(PDOException $e) {
		    echo "Connection failed: " . $e->getMessage();
		    }
		?>

		<div class="nav">
      <div class="dropdown">
        <button class="dropbtn">• • •</button>
        <div class="dropdown-content">
					<div class="as">
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Quotes">Quotes</a>
            <a href="Previous_Sites">Previous Sites</a>
            <a href="Our_Team">Our Team</a>
          </div>
        </div>
      </div>
			<div class="name">
				<h1>SiteStart</h1>
				<p>Canada</p>
			</div>
      <div class="ULContainer">
        <ul class="nav_items">
          <li><a href="Home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Quotes">Quotes</a></li>
          <li><a href="Previous_Sites">Previous Sites</a></li>
          <li><a href="Our_Team">Our Team</a></li>
        </ul>
    </div>
    </div>
		<div class="banner-top">
			<img class="banner-image" src="Res\Banner.svg">
		</div>

		<div class="Quote">
			<p>Warning this website is under development no quotes are currently being processed!!!!!!!!!!!!!!</P>
				<form class="Quote_Input">
					<label for="type">What will you be using this site for?</label>
					<br>
					<div class="radio">
						<input type="radio" name="type" value="Personal">Personal<br>
						<input type="radio" name="type" value="Buisness">Buisness<br>
						<input type="radio" name="type" value="Other">Other
					</div>
					<br>
					<br>
					<br>
					<br>
					<label for="Email">Your Email: </label>
					<br>
					<input type="Email" name="Email" id="email" size="20" placeholder="JSmith@SiteStart.ca" class="input" required>
					<br>
					<br>
					<label for="name">Your Name: </label>
					<br>
					<input type="text" name="name" id="name" size="30" placeholder="John Smith" class="input" required>
					<br>
					<br>
					<label for="Cname">Your Company Name: </label>
					<br>
					<input type="text" name="Cname" id="Cname" size="30" placeholder="SiteStart" class="input">
					<br>
					<br>
					<label for="primary_colour">Primary Colour (HEX format): #</label>
					<br>
					<input type="text" name="Primary_Colour" id="primary_colour" maxlength="6" minlength="6" size="5" placeholder="ffffff" class="input" required>
					<br>
					<br>
					<label for="secondary_colour">Secondary Colour (HEX format): #</label>
					<br>
					<input type="text" name="Secondary_Colour" id="secondary_colour" maxlength="6" minlength="6" size="5" placeholder="000000" class="input" required>
					<br>
					<br>
					<label for="accent_colour">Accent Colour (HEX format): #</label>
					<br>
					<input type="text" name="Accent_Colour" id="accent_colour" maxlength="6" minlength="6" size="5" placeholder="00ff00" class="input" required>
					<br>
					<br>
					<label for="Nav_Bar_Location">Navagation Bar Location: </label>
					<br>
					<select name="Nav_Bar_Location"  class="input" required>
						<option value="" selected disabled>----</option>
						<option value="Top">Top</option>
						<option value="Left">Left</option>
						<option value="Right">Right</option>
					</select>
					<br>
					<br>
					<button type="button" id="addbutton" class = "formbtn">Add Tab</button>
					<br>
					<br>
					<h3>Tabs:</h3>
					<br>
					<br>
					<br>
					<br>

					<div id="Tabs">
						<div id="Tab">
							<label for="Tab_TextBox">Name Of Tab: </label>
							<br>
							<input type="text" name="Tab_TextBox" id="tab" class="tabs" maxlength="20" minlength="1" size="10" placeholder="New Tab"  class="input" required>
							<br>
							<br>
						</div>
					</div>

					<label for="Banner">Would you like to hava a banner at the top of your site?</label>
					<br>
					<div class="radio">
						<input type="radio" name="Banner" value="yes">yes<br>
						<input type="radio" name="Banner" value="no">no
					</div>

					<br>
					<br>
					<br>

					<label for="Extra_Ideas">Extra Ideas/Notes: </label>
					<br>
					<input type="text" name="Extra_Ideas" id="extra_ideas" class="input" placeholder="Ex. Twitter feed, interactive features, animations, etc.">
					<br>
					<br>

					<p class="Bolded">Disclaimer! All media (Pictures, Logos, Banners, etc.) must be provided, additional costs <U>will</U> be added if these things are required to be made by SiteStart.</p>


					<input type="submit" name="Enter" value="submit" id="submit" onclick="setQuoteData();" >
				</form>
					<p id="results"</p>
			</center>

		</div>


		<div class="footer">
        <ul class="footer_items">
          <li><img width="15px" src="Res\Logo-Nav.svg">SiteStart Canada</li>
          <li>To give feedback please contact <a href="mailto:liam@jewer.ca?subject=SiteStart feedback">Liam@Jewer.ca</a></li>
        </ul>
        <p class="Copywrite_Message">© 2018 SiteStart</p>
    </div>
		<script type="text/javascript">

			var i = 1;

			var addbutton = document.getElementById("addbutton");
			addbutton.addEventListener("click", function() {
				i = ++i;
				var Tabs = document.getElementById("Tabs");
				var clone = Tabs.firstElementChild.cloneNode(true);
				clone.id = "Tab" + i;
				textin = clone.getElementsByClassName("tabs")[0];
				textin.value = null;
				Tabs.appendChild(clone);
				var element = document.getElementById("Tab" + i);
				var btn = document.createElement("button");
				btn.className = "removebutton";
				btn.
				btn.setAttribute("type", "button");
				var node = document.createTextNode("Remove Tab");
				btn.appendChild(node);
				element.insertBefore(btn, element.getElementsByTagName("br")[1]);s
				setRemove();
			});
			function setQuoteData(){
				var Tabs_Data = new Array();
				Type = document.getElementsByName("type")[0].value;
				Email = document.getElementsByName("Email")[0].value;
				Name = document.getElementsByName("name")[0].value;
				cname = document.getElementsByName("Cname")[0].value;
				PC = document.getElementsByName("Primary_Colour")[0].value;
				SC = document.getElementsByName("Secondary_Colour")[0].value;
				AC = document.getElementsByName("Accent_Colour")[0].value;
				Nav_Bar_Loc = document.getElementsByName("Nav_Bar_Location")[0].value;

				for (var n = 0; n < i; n++) {
					var Tabvalue = document.getElementsByClassName("tabs")[n].value;
					Tabs_Data.push(Tabvalue);
				}

				Banner = document.getElementsByName("Banner")[0].value;
				EI = document.getElementsByName("Extra_Ideas")[0].value;

				var Data = [Type, Email, Name, cname, PC, SC, AC, Nav_Bar_Loc, Tabs_Data, Banner, EI];
				alert(Data.valueOf());
			}
			function setRemove(){
				var buttons = document.getElementsByClassName("removebutton")
				for (var i = 0; i < buttons.length; i++) {
    			buttons[i].addEventListener('click', function() {
        	 var Parent = this.parentNode;
					 Parent.parentNode.removeChild(Parent);
    			});
				}
			}
		</script>
		<?php

		 ?>
	</body>
</html>
