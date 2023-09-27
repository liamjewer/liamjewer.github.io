<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simply Sports - On The Rise</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="ss.css">
    <link rel="icon" href="res/Favicon.png">
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
</head>

<body>
    <div id="nav">
        <a href="home">Home</a>
        <a href="team">Our Team</a>
        <a href="contact">Contact</a>
        <a href="http://store.ontherisepodcast.ca/">Merch</a>
        <a href="simply%20sports">Simply Sports</a>
    </div>
    <div id="hamBtn" class="circle" onclick="clicked();">
        <div class="nav-icon">
            <div></div>
        </div>
    </div>
    <a href="home" class="link" id="home">
        <div class="header">
            <H2>Home</H2>
        </div>
        <div class="circle"><i class="fas fa-home fa-3x"></i></div>
    </a>

    <a href="team" class="link" id="team">
        <div class="header">
            <H2>Our Team</H2>
        </div>
        <div class="circle"><i class="fas fa-users fa-3x"></i></i>
        </div>
    </a>

    <a href="contact" class="link" id="contact">
        <div class="header">
            <H2>Contact</H2>
        </div>
        <div class="circle"><i class="fas fa-envelope fa-3x"></i></div>
    </a>

    <a href="http://store.ontherisepodcast.ca/" class="link" id="merch">
        <div class="header">
            <H2>Merch</H2>
        </div>
        <div class="circle"><i class="fas fa-tshirt fa-3x"></i></div>
    </a>

    <a href="simply%20sports" class="link" id="ss">
        <div class="header">
            <H2>Simply Sports</H2>
        </div>
        <div class="circle"><i class="fas fa-align-left fa-3x"></i></div>
    </a>

    <div id="toc"><!--table of contents-->
    </div>
    <div id="maincontent">
        <div id="title">
            <h1>Simply Sports</h1>
            <h2>brought to you by On The Rise Podcast</h2>
        </div>
        <?php
            $directory = "../posts/";
            $files = scandir($directory);
            rsort($files);
            foreach ($files as $file) {
                if ($file != '.' && $file != '..') {
                    $filepath = $directory.$file;
                    if (!file_exists($filepath)){
                        echo "Episode Not Found";
                    }else{
                        $fp = fopen($filepath, "r");
                        $number = fgets($fp);
                        $date = fgets($fp);
                        $time = fgets($fp);
                        $author = fgets($fp);
                        $text = "";
                        while(!feof($fp)){
                            $text .= fgets($fp)."<br>";
                        }
                            echo "<div class=\"divider\"><div class=\"line\"></div><img src=\"res/Logo.svg\" alt=\"logo\"><div class=\"line\"></div></div>";
                            echo "<div class=\"post\" id=\"$number\">";
                            echo "<h1 class=\"postTitle\">Simply Sports $number</h1>";
                            //$('#toc').html("<a href=\"#$number\">Simply Sports $number</a>"); 
                            echo "<div class=\"date\">By: $author on $date </div>";
                            echo "<div class=\"body\">$text</div>";
                            echo "</div>";
                        fclose($fp);
                    }
                }
            }
        ?>
    </div>

    <div id="footer">
        <P>
            Copyright ©
            <script type="text/javascript">
                var d = new Date()
                document.write(d.getFullYear())
            </script>
            On The Rise
        </P>
        <div id="ico">
            <a href="https://open.spotify.com/show/4R9X5P0vBfA0MXE7cWvel2?si=BMf3vXdNTAyH__yRJqQxvQ"><i
                              class="fab fa-spotify fa-2x"></i></a>
            <a href="https://www.instagram.com/risepodcast/?hl=en"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://twitter.com/rise_podcast"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://discord.gg/AAhguaD"><i class="fab fa-discord fa-2x"></i></a>
        </div>
        <div id="LiamJewer">
            <p style="color: white; margin: 0;">Made by <img height="12pt" src="https://liamjewer.github.io/res/logo.png"> Liam Jewer<br><a href="https://liamjewer.github.io">liamjewer.github.io</a></p>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>