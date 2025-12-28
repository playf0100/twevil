import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

// ...existing code...
export default function Story2024_4() {
    const { t, lang } = useTranslation()
    const content = t('stories.2024_4.content') || []

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
                  <h1 className="tagline story_title">{t('stories.2024_4.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2024_4.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2024_4.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                <div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/2.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/3.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/4.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/5.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/6.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/7.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/8.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/9.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/10.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/11.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/12.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/13.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/14.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/15.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/16.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/17.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/18.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/19.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/20.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/21.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/22.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/23.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/24.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/25.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/1.JPG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/26.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/27.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/28.JPG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/29.JPG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/30.JPG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/assets/images/storys/2024_4/31.JPG" alt="story 3" /></a></figure></div>
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
