<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<meta name="description" content="The best in cats">
    	<meta name="keywords" content="Cats, code, lolz">
		<title><?php bloginfo("name"); ?> | <?php bloginfo("description"); ?></title>
		<link href="<?php bloginfo('template_directory'); ?>/css/normalize.css" rel="stylesheet">
		<link href="<?php bloginfo('template_directory'); ?>/css/main.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/css/custom.css" rel="stylesheet">
    <?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

	<div id="header">
			<h1><a href="#">Cats Who Code</a></h1>
		</div><!-- #header -->

		<div class="navcontainer">
			<div class="inner-navcontainer">
				<nav class="clearfix">
						<?php wp_nav_menu( $args ); ?>
				</nav>
			</div>
		</div>

    <div id="container">
    <div id="main">

	</body>
</html>
