<?php
/*
Template Name: Taplist Page
*/
?>

<?php get_header(); ?>

	<body <?php body_class(); ?> id="inner-bkgd">
    <div id="wrap">
		<header role="banner">
                        <div class="navbar">
                            <div class="navbar-inner">
                                <div class="container-fluid">                                            
                                        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </a>
                                        <a class="brand" id="logo" title="<?php echo get_bloginfo('description'); ?>" href="<?php echo home_url(); ?>">Logo here</a>


                                         
                                        <div class="nav-collapse collapse">
                                            <?php bones_main_nav(); // Adjust using Menus in Wordpress Admin ?>
                                        </div>
                                    
                                    <?php if(of_get_option('search_bar', '1')) {?>
                                    <form class="navbar-search pull-right" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
                                        <input name="s" id="s" type="text" class="search-query" autocomplete="off" placeholder="<?php _e('Search','bonestheme'); ?>" data-provide="typeahead" data-items="4" data-source='<?php echo $typeahead_data; ?>'>
                                    </form>
                                    <?php } ?>
                                 
                                </div> <!-- end #container-fluid --> 
                                    
                            </div> <!-- end .navbar-inner -->
                        </div> <!-- end .navbar -->
                    
		</header> <!-- end header -->   
			
		<div class="container-fluid">
			
			<div id="content" class="clearfix row-fluid">
			
				<div id="main" class="span9 clearfix" role="main">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
						
						<header>
							
							<div class="page-header"><h1><?php the_title(); ?></h1></div>
						
						</header> <!-- end article header -->
					
						<section class="post_content">
							<?php the_content(); ?>




<?php                                                                    
$string = 
    $string = 
    file_get_contents("https://nodabrewing.com/the-beer/");

    $json_taps = json_decode($string, true);  


$t=1; 
echo '<div id="datafieldcontainer">'; 

foreach ($json_taps as $beverage) { 
    
        $item_name = $beverage['MenuItemDisplayDetail']['DisplayName'];
        $producer_name = $beverage['MenuItemProductDetail']['FullProducerList'];
        $beverage_name = $beverage['MenuItemProductDetail']['BeverageNameWithVintage'];
        $beverage_style = $beverage['MenuItemProductDetail']['FullStyleName'];
        $beverage_color = $beverage['MenuItemProductDetail']['Beverage']['StyleColor'];
        $year = $beverage['MenuItemProductDetail']['Year'];
        $beverage_abv = $beverage['MenuItemProductDetail']['Beverage']['Abv'];
        $beverage_type = $beverage['MenuItemProductDetail']['BeverageType'];
        $producer_location = "";
        $producer_url = "";
        switch($beverage_type) {
            case "Beer":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['Brewery']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['Brewery']['BreweryUrl'];
                break;
            case "Cider":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['Cidery']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['Cidery']['CideryUrl'];
                break;
            case "Mead":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['Meadery']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['Meadery']['MeaderyUrl'];
                break;
            case "Wine":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['Winery']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['Winery']['WineryUrl'];
                break;
            case "Kombucha":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['KombuchaMaker']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['KombuchaMaker']['Url'];
                break;
            case "Soft Drink":
                $producer_location = $beverage['MenuItemProductDetail']['Beverage']['SoftDrinkMaker']['Location'];
                $producer_url = $beverage['MenuItemProductDetail']['Beverage']['SoftDrinkMaker']['Url'];
                break;
        }
        $date_put_on = $beverage['DatePutOn']; 
        $bottle_size = $beverage['MenuItemProductDetail']['Prices'][0]['Size'];   
        $bottle_price = $beverage['MenuItemProductDetail']['Prices'][0]['Price'];
        $beverage_ps = $beverage['MenuItemProductDetail']['Prices'][0]['DisplayName']; 
        $in_bottles = $beverage['MenuItemProductDetail']['AvailableInBottles'];
        $keg_size = $beverage['MenuItemProductDetail']['KegSize'];
        $oz_remaining = $beverage['MenuItemProductDetail']['EstimatedOzLeft'];
        $scale = 1.0; //


    //calculating percentage of keg remaining
    // Get Percentage out of 100
    if ( !empty($keg_size) ) { $percent = $oz_remaining  / $keg_size; } 
    else { $percent = 0; }

    // Limit to 100 percent (if more than the max is allowed)
    if ( $percent > 1 ) { $percent = 1; }     
    if ( $percent < 0 ) { $percent = .005; }     
    $percent_remaining = number_format($percent*100, 0);
    if ( $percent_remaining < 1 ) {$percent_remaining = "< 1";}
    
    //determine percent Left color
    //                  |-----------Red ---------------------------|   |-------Green--------------------| |Blue|
    $percent_left_color = (max(0,min(255,511 * (1-$percent))) * 65536) + (max(0,min(255,511 * $percent)) * 256) + 40;

    
    $html =  
        '<div id="responsecontainer">'.
        '<div id="boxfielddata" title="'.$percent_remaining.'% remaining" ><b>'. 
                  
        '<span title="Tap: '.$item_name.'">'.
        $item_name.": ".
        (!empty($producer_url) ? '<a href="http://'.$producer_url.'"  
target="_blank">' : '</a>').$producer_name.'</a>'.
        '<i>'. $beverage_name.'</i></b></span>'.
        '<span style="padding:1px;margin-left:10px;border:solid black 
0px;font-size:8pt;"><a 
href="http://www.ratebeer.com/advbeersearch.php?BeerName='.$producer_name.' 
'.$beverage_name.'" target=_blank title="Click to find a Rate Beer description of 
this beverage!">RB</a><b>|</b>'.
        '<a href="http://beeradvocate.com/search?q='.$brewery_name.' 
'.$beverage_name.'&qt=beer" target=_blank title="Click to find a Beer Advocate 
description of this beverage!">BA</a></span><br>'. 
        $beverage_style.' '.(!empty ($beverage_abv) ? 
number_format($beverage_abv, 1, '.', '').'% ' : '').
        '<a href="http://maps.google.com/maps?q='.$beverage_location.'" 
target="_blank">'.$beverage_location.'</a> '.
        '<span>'.($beverage_ps == '12oz' ? $beverage_ps : '').'</span>'.
        '<div>'.        '<span style="position:relative;">'.($in_bottles == TRUE 
? '<a href="/dev/?page_id=7&so=brewery"><i>Available in bottles!</i></a>' : 
'').'</span>'.    
//PERCENTAGE AND COLOR
        '<div class="percentbar" style="width:'.round(100 * $scale).'px;">'.
        '<div style="width:'.round(max($percent*100,5) * $scale).'px;font-size:8pt;color:'.dechex($percent_left_color).';"></div>'.
        '</div>'.
        '</div>'.
        '</div></div>'.  
    
        ($t == $countnumrows ? '</div><div id="shim"></div><div 
id="datafieldcontainer">' : '');    
 
echo $html;
$t++;     
}
echo '</div><p>'.

'</div>';

?> 










					
						</section> <!-- end article section -->
						
						<footer>
			
							<p class="clearfix"><?php the_tags('<span class="tags">' . __("Tags","bonestheme") . ': ', ', ', '</span>'); ?></p>
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
					
					<?php endwhile; ?>	
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1><?php _e("Not Found", "bonestheme"); ?></h1>
					    </header>
					    <section class="post_content">
					    	<p><?php _e("Sorry, but the requested resource was not found on this site.", "bonestheme"); ?></p>
					    </section>
					    <footer>
					    </footer>
					</article>
					
					<?php endif; ?>
			
				</div> <!-- end #main -->
                
                <?php get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>
