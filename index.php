<?php get_header() ?>
    <section class="hero slider">
        <a href="tel:+998902150040">
        <div class="slide_group">
            <img src="<?php echo get_theme_file_uri('/img/documents_kill.jpg')?>" id="lastClone" alt="уничтожение-документов-архив" srcset="<?php echo get_theme_file_uri('/img/documents_kill-w_1400.jpg 1400w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_1222.jpg 1222w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_819.jpg 819w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_200.jpg 200w')?>">
            <img src="<?php echo get_theme_file_uri('/img/pereplet.jpg')?>" srcset="<?php echo get_theme_file_uri('/img/pereplet-w_1400.jpg 1400w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_1199.jpg 1199w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_808.jpg 808w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_200.jpg 200w')?>" alt="переплет-документов-архив">
            <img src="<?php echo get_theme_file_uri('/img/documents.jpg')?>" srcset="<?php get_theme_file_uri('/img/documents-w_1400.jpg 1400w')?>, <?php echo get_theme_file_uri('/img/documents-w_1128.jpg 1128w')?>, <?php echo get_theme_file_uri('/img/documents-w_762.jpg 762w')?>, <?php echo get_theme_file_uri('img/documents-w_200.jpg 200w')?>" alt="хранение-документов-архив">
            <img src="<?php echo get_theme_file_uri('/img/documents_kill.jpg')?>" alt="уничтожение-документов-архив" srcset="<?php echo get_theme_file_uri('/img/documents_kill-w_1400.jpg 1400w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_1222.jpg 1222w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_819.jpg 819w')?>, <?php echo get_theme_file_uri('/img/documents_kill-w_200.jpg 200w')?>">
            <img src="<?php echo get_theme_file_uri('/img/pereplet.jpg')?>" id="firstClone" srcset="<?php echo get_theme_file_uri('/img/pereplet-w_1400.jpg 1400w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_1199.jpg 1199w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_808.jpg 808w')?>, <?php echo get_theme_file_uri('/img/pereplet-w_200.jpg 200w')?>" alt="переплет-документов-архив">
        </div> 
        </a>
        <div class="prev">
                <i class="fas fa-chevron-circle-left"></i>
            </div>
            <div class="next">
                <i class="fas fa-chevron-circle-right"></i>
            </div>      
    </section>
    <main>
        <div class="container"> 
        <section class="services">
            <h2>Архивные услуги</h2>
            <div class="service_cards">
                <div class="inner_card">
                    <img src="<?php echo get_theme_file_uri('/img/iconfinder_archive_172569.svg')?>" alt="archive" loading="lazy">
                    <h3><a href="https://www.narchive.uz/docstorage">Хранение документов</a></h3>    
                </div>
                <div class="inner_card">
                    <img src="<?php echo get_theme_file_uri('/img/hard-cover-book.svg')?>" alt="book" loading="lazy">
                    <h3><a href="https://www.narchive.uz/pereplet">Переплет документов</a></h3>    
                </div>
                <div class="inner_card">
                    <img src="<?php echo get_theme_file_uri('/img/batch.svg')?>" alt="batch" loading="lazy">
                    <h3><a href="https://www.narchive.uz/obrabotka">Архивная обработка</a></h3>    
                </div>
                <div class="inner_card">
                    <img src="<?php echo get_theme_file_uri('/img/scanner.svg')?>" alt="scanner" loading="lazy">
                    <h3><a href="https://www.narchive.uz/scan">Сканирование документов</a></h3>    
                </div>
            </div>
        </section>
        <section class="news">
            <h2>Новости</h2>
            <div class="cards">
                <?php $query = new WP_Query(array('category__not_in' => array(5)))?>
            <?php while($query -> have_posts()) : $query -> the_post(); ?>
            <div class="card">
                <div class="image_container">
                   <?php the_post_thumbnail('full', array('loading' => 'lazy'));?>
                </div>
                    <div class="title_container"><h3><a href="<?php the_permalink()?>"><?php the_title(); ?></a></h3></div>               
                    <span><?php the_time('d.m.Y')?> | <?php the_time('H:i')?></span>
                    <span><i class="far fa-eye"></i><?php echo gt_get_post_view()?></span>
                    <button><a href="<?php the_permalink()?>">Подробнее</a></button>
                </div>
            <?php endwhile; ?>
            </div>
        </section>
        </div> 
        </main>
        <?php get_footer()?>
</body>
</html>
     
