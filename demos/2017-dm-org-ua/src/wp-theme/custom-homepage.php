<?php
/**
 * Template Name: CustomHomepage
 * @package Magnus-child;
*/  

get_header(); ?>

<main id="main" class="site-main" role="main">
		<section id="projects" class="u-full-width projects">
			<header class="container section-header">
				<h1><?php _e( 'Our Projects', 'magnus-child' ); ?></h1>
			</header>

	<?php projects_carousel_shortcode(); ?>

	</section>
	<section id="partners" class="u-full-width projects">
			<div class="container section-header">
				<h1>
		<?php _e( 'Partners', 'magnus-child' ); ?></h1>
			</div>
	<?php partners_section_shortcode(); ?>

	</section>

</main><!-- #main -->
				

<?php get_sidebar(); ?>
<?php get_footer(); ?>
