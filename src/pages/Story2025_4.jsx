import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

export default function Story2025_4() {
  const { t, lang } = useTranslation()
  const content = t('stories.2025_4.content') || []

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
                  <h1 className="tagline story_title">{t('stories.2025_4.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2025_4.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2025_4.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                  <div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/1.PNG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/2.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/3.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/4.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/5.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/6.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/7.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/8.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/9.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/10.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/11.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/12.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/13.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/14.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/15.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/16.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/17.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/18.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/19.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/20.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/21.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/22.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/23.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/24.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/25.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/26.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/27.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/28.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/29.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/30.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/31.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/32.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/33.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/34.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/35.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/36.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/37.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/38.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/39.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/40.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/41.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/42.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/43.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/44.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/45.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/46.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/47.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/48.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/49.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/50.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/51.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/52.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/53.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/54.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/55.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/56.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/57.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/58.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/59.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/60.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/61.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/62.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/63.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/64.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/65.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/66.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/67.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/68.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/69.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/70.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/71.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/72.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/73.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/74.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/75.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/76.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/77.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/78.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/79.JPG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/80.JPG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/81.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/82.JPG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/83.JPG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_4/84.JPG" alt="story 4" /></a></figure></div>
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
