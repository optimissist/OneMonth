</div><!-- #main -->


<?php
if ( is_active_sidebar( 'sidebar-1' ) ) : ?>

    <div id="sidebar" class="clearfix">

        <?php dynamic_sidebar('Sidebar Cat Blog'); ?>

    </div>

<?php

else : ?>

    <?php get_sidebar() ?>

<?php endif; ?>

<div class="clear"></div>

<div id="footer">

  <a href="https://twitter.com/onemonthedu">
    <img src="<?php bloginfo(template_directory); ?>/images/social-icon-twitter.png" alt="Twitter">
  </a>

  <a href="#">
    <img src="<?php bloginfo(template_directory); ?>/images/social-icon-facebook.png" alt="Facebook">
  </a>

</div><!-- #footer -->

</div><!-- #container -->
<?php wp_footer(); ?>
</body>
</html>
