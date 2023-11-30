<?php
/*
 * Plugin Name: Custom Project Slider for dm.org.ua
 * Plugin URI: dm.org.ua
 * Description: Custom plugin to display dm.org.ua projects.
 * Version: 0.2
 * Author: Genek Tomashko
 * Author URI: behance.net/genechk
 * License: MIT
 * Text Domain: project-slider
 * Domain Path: /languages/
 */

// See http://www.charityandbiscuits.com/blog/create-bootstrap-wordpress-carousel-tagscategories-featured-images/
// Creates a simple carousel. 
// Slider will show posts in the 'Projects' category
// Check out Advanced Custom Fields if this is not enough.

if ( !function_exists( 'project_slider_scripts' ) ):
	function project_slider_scripts() {
	 //   wp_enqueue_style( 'slick-css', get_stylesheet_uri() );


	    wp_enqueue_script( 'slick', plugin_dir_url( __FILE__ ) . 'js/slick.min.js', array(), '1.0.0', true );
	    wp_enqueue_script( 'dm-org-ua-main-script', plugin_dir_url( __FILE__ ) . 'js/scripts.js', array(), '1.0.0', true );
	}
	add_action( 'wp_enqueue_scripts', 'project_slider_scripts' );
endif;


if ( !function_exists( 'projects_carousel_shortcode' ) ):
    function projects_carousel_shortcode() {
	// Set which posts to display, order and maximum limit.

	$number = 0;


	$projects = get_posts(array(
	  'post_type' => 'projects',
	  'numberposts' => -1,
	  'orderby'=> 'menu_order'
	));

	if (!empty($projects)):
		    
	?>
	<div id="projects-detailed" class="u-full-width projects"> 	
			<div class="container slider project-slider">
            
	    <?php foreach($projects as $project): ?>
	     <?php
		  $postId = $project->ID;
		  $has_featured_image =  has_post_thumbnail( $project->ID );
		  if($has_featured_image) 
		    {
	          $slider_image = '';
	          $slider_title = '';
			  $slider_excerpt = '';

                // Slide Title
            $slider_title = get_the_title($project);
          
                // Slide Description
            $slider_excerpt = get_the_excerpt($project);

                // Slide Image
            $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($project->ID), 'home-slider' );
            $url = $thumb['0'];

        ?>
				<article id="project-<?php echo $number++; ?>" class="project row">
					<picture class="six columns project-image" style="background-image: url('<?php echo $url; ?>')">
					</picture>
					<header class="six columns project-description">
						<h3><?php echo $slider_title; ?></h3>
						<p><?php echo $slider_excerpt; ?></p>
				    </header>
				</article>

  		  <?php  } ?>
	     <?php endforeach; ?>

 	     </div>


	</div>


	<div id="projects-list" class="u-full-width projects">
			<div class="container slider project-nav">
       
	    <?php foreach($projects as $project): ?>
	     <?php
		  $postId = $project->ID;
		  $has_featured_image = has_post_thumbnail( $project->ID );
		  if($has_featured_image) 
		    {
	          $slider_url = '';
	          $slider_image = '';
	          $slider_title = '';
			  $slider_excerpt = '';

                // Slide Title
            $slider_title = get_the_title($project);
          
                // Slide URL
            $slider_url = get_permalink($project);

                // Slide Image
            $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($project->ID), 'home-slider' );
            $url = $thumb['0'];

        ?>

				<a class="project thumbnail four columns" href="<?php echo $slider_url; ?>">
					<picture class="nav-image" style="background-image: url('<?php echo $url; ?>')">
					</picture>
					<p class="nav-description"><?php echo $slider_title; ?></p>

				</a>

  		  <?php  } ?>
	     <?php endforeach; ?>

 	     </div>


	</div>
	
	<?php wp_reset_postdata(); ?>


	<?php
	
	endif;


   } 

add_shortcode('dmprojects', 'projects_carousel_shortcode');



endif;




if ( !function_exists( 'partners_section_shortcode' ) ):
    function partners_section_shortcode() {
	// Set which posts to display, order and maximum limit.

	$number = 0;
	$placeholder = '';


	$partners = get_posts(array(
	  'post_type' => 'partner_item',
	  'numberposts' => -1,
	  'orderby'=> 'menu_order'
	));


	 if ( !empty($partners) ):

		    
	?>
		<div class="container partners">
            
            
	    <?php foreach($partners as $partner): ?>
	     <?php
		  $postId = $partner->ID;
		  $has_featured_image =  has_post_thumbnail( $partner->ID );

	          $partner_image = '';
	          $partner_title = '';
	          $partner_url = '';
	          $url = '';

                // Partner Title
            $partner_title = get_the_title($partner);  
    
    			// Get English translation if exists
            $english_title = get_post_meta( $postId, 'title_en', true );
    
    		if ( function_exists( 'pll_current_language') && 'en_GB' === get_locale() && !empty ( $english_title ) ) {
            	$partner_title = $english_title;
            }
          
                // Link to partner's site
            $partner_url = get_post_meta( $partner->ID, 'external_link', true );
    

                // Partner Logo
			if ( $has_featured_image ) {
            	$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($postId), 'partner-logo' );
            	$url = $thumb['0'];
			}

			$number++;

			if($number%4==1) {
				echo '<div class="row">';
			}

        ?>
				<div id="partner-<?php echo $number; ?>" class="three columns partner">
			<?php 
				if ( ! empty( $partner_url ) ) {
				    echo ( '<a href="' . $partner_url . '">' );
				}
			?>
					<img
						src="
							<?php if( $has_featured_image )
								{ echo $url; }
							?>"
						alt="
							<?php echo ( $partner_title . ' &ndash; ' . __( 'partner logo', 'project-slider' ) ); ?>"
						class="partner-logo">
						<p class="partner-caption">
							<?php 
                                	echo $partner_title;
                        	?>
						</p>
					<?php if ( ! empty( $partner_url ) ) {
						    echo '</a>';
						}
					?>
				 </div>

			<?php if($number%4==0) {
				echo '</div>';
				}
			?>

				
	     <?php endforeach; ?>


	</div>


	<?php
?>
	
	<?php wp_reset_postdata(); ?>



	<?php
	

	
	endif;

   } 

add_shortcode('dmpartners', 'partners_section_shortcode');



endif;

?>