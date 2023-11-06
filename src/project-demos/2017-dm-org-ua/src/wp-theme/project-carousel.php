<?php 
/**
 *	@package: Magnus-child
 */


// adding a new type of content for projects

if ( !function_exists ('custom_project_item') ):
	function custom_project_item() {
	 $labels = array(
	    'name'               => _x( 'Проекти', 'post type general name' ),
	    'singular_name'      => _x( 'Проект', 'post type singular name' ),
	    'menu_name'          => 'Наші проекти'
	  );
	    $args = array(
	    'labels'      	 => $labels,
	    'description'  	 => 'Сторінки проектів. Короткий вигляд відображається на головній сторінці, повний &ndash; на сторінках відповідного типу',
	    'public'       	 => true,
	    'menu_position'	 => 5,
	    'supports'   	 => array(  'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' )
	  );

	register_post_type( 'projects', $args );

	}

	add_action( 'init', 'custom_project_item' );
endif;





// adding a new type of content for partners

if ( !function_exists ('custom_partner_item') ):
	function custom_partner_item() {
	 $labels = array(
	    'name'               => _x( 'Партнери', 'post type general name' ),
	    'singular_name'      => _x( 'Партнер', 'post type singular name' ),
	    'menu_name'          => 'Партнери'
	  );
	    $args = array(
	    'labels'      	 => $labels,
	    'description'  	 => 'Перелік партнерів НГО',
	    'public'       	 => false,	   
	    'publicly_queryable' => true,
	    'show_ui'		 => true,
	    'menu_position'	 => 5,
	    'supports'   	 => array( 'title', 'thumbnail', 'page-attributes' ),
	    'has_archive'   	 => false
	  );

	 register_post_type( 'partner_item', $args );
	}
	add_action( 'init', 'custom_partner_item' );
endif;


//Add js to footer. Change the interval to alter how long the slides display - 4000 equals 4 seconds.

// function projects_carousel_footer() {
// }
	// add_action('wp_footer', 'projects_carousel_footer');

?>