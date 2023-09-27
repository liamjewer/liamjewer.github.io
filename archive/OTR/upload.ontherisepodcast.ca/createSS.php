<?php
      $number = Trim(stripslashes($_POST['number']));
      $date = Trim(stripslashes($_POST['date']));
      $time = Trim(stripslashes($_POST['time']));
      $author = Trim(stripslashes($_POST['author']));
      $post = Trim(stripslashes($_POST['post']));

      $upload = fopen("../posts/SS{$number}.txt", "w");
      $f = new NumberFormatter("en", NumberFormatter::SPELLOUT);
      fwrite($upload, $f->format($number));
      fwrite($upload, "\n");
      fwrite($upload, $date);
      fwrite($upload, "\n");
      fwrite($upload, $time);
      fwrite($upload, "\n");
      fwrite($upload, $author);
      fwrite($upload, "\n");
      fwrite($upload, $post);
      fclose($upload);

      print "<meta http-equiv=\"refresh\" content=\"0;URL=http://upload.ontherisepodcast.ca/simply%20ssports\">";
?>