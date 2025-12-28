import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

// ...existing code...
export default function Story2024_1() {
  const { t, lang } = useTranslation()
  const content = t('stories.2024_1.content') || []

  const goNext = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    try {
      var $c = window.jQuery && window.jQuery('#slideshow_face')
      if ($c && $c.trigger) $c.trigger('next.owl.carousel')
    } catch (err) {}
  }

  useEffect(() => {
    const $ = window.jQuery
    if ($ && $.fn && $.fn.owlCarousel) {
      const $el = $('#slideshow_face')

      // If already initialized, destroy first (safety)
      if ($el.hasClass('owl-loaded')) {
        try {
          $el.trigger('destroy.owl.carousel')
        } catch (e) {}
      }

      $el.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true
      })
    }

    // cleanup: destroy on unmount
    return () => {
      const $ = window.jQuery
      if ($ && $.fn && $.fn.owlCarousel) {
        try {
          $('#slideshow_face').trigger('destroy.owl.carousel')
        } catch (e) {}
      }
    }
  }, [])

  return (
    <main className="container-fluid">
      <div className="container">
        <section className="primary margin-15">
          <div className="row">
            <div className="col-12">
              <article className="story-article hero section_margin line_hoz">
                <header className="story-header">
                  <h1 className="tagline story_title">{t('stories.2024_1.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2024_1.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2024_1.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                <div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/1.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/2.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/3.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/4.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/5.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/6.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/7.JPG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/8.JPG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/9.JPG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/10.JPG" alt="story 10" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/11.JPG" alt="story 11" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/12.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/13.JPG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/14.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/15.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/16.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/17.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/18.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/19.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/20.JPG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/21.JPG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/22.JPG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/23.JPG" alt="story 10" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/24.JPG" alt="story 11" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/25.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/26.JPG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/27.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/28.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/29.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/30.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/31.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/32.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/33.JPG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/34.JPG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/35.JPG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/36.JPG" alt="story 10" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/37.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/38.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/39.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/40.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/41.JPG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/42.JPG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/43.JPG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/44.JPG" alt="story 10" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/45.JPG" alt="story 11" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/46.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/47.JPG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/48.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/49.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2024_1/50.JPG" alt="story 3" /></a></figure></div>
								</div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
// ...existing code...
