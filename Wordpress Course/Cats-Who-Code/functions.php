<?php

register_sidebar(array(
	'name'          => __( 'Sidebar Cat Blog' ),
	'id'            => 'cat-sidebar-1',
	'description'   => 'Widgets Here Will Be On The Right Of The Site',
	'before_widget' => '<div class="widget">',
	'after_widget'  => '</div>',
	'before_title'  => '<h3>',
	'after_title'   => '</h3>'
));

register_nav_menu('main', 'Main navigation menu');

?>
