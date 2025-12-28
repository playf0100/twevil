import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

// ...existing code...
export default function Story2024_2() {
  const { t, lang } = useTranslation()
    const content = t('stories.2024_2.content') || []

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
                  <h1 className="tagline story_title">{t('stories.2024_2.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2024_2.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2024_2.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                <div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/1.PNG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/2.PNG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/3.PNG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/4.PNG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/5.PNG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/6.PNG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/7.PNG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/8.PNG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/9.PNG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/10.PNG" alt="story 10" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/11.PNG" alt="story 11" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/12.PNG" alt="story 12" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/13.PNG" alt="story 13" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/14.PNG" alt="story 14" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/15.PNG" alt="story 15" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/16.PNG" alt="story 16" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/17.PNG" alt="story 17" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/18.PNG" alt="story 18" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_2/19.PNG" alt="story 19" /></a></figure></div>
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
