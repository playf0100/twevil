import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

export default function Story2025_2() {
  const { t, lang } = useTranslation()
  const content = t('stories.2025_2.content') || []

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
                  <h1 className="tagline story_title">{t('stories.2025_2.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2025_2.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2025_2.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                <div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/1.PNG" alt="story 1" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/2.PNG" alt="story 2" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/3.PNG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/4.PNG" alt="story 4" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/5.PNG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/6.PNG" alt="story 6" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/7.PNG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/8.PNG" alt="story 8" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/9.PNG" alt="story 9" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/10.PNG" alt="story 10" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/11.PNG" alt="story 11" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/12.PNG" alt="story 12" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/13.PNG" alt="story 13" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/14.PNG" alt="story 1" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/15.PNG" alt="story 2" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/16.PNG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/17.PNG" alt="story 4" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/18.PNG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/19.PNG" alt="story 6" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/20.PNG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/21.PNG" alt="story 8" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/22.PNG" alt="story 9" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/23.PNG" alt="story 10" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/24.PNG" alt="story 11" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/25.PNG" alt="story 12" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/26.PNG" alt="story 13" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/27.PNG" alt="story 1" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/28.PNG" alt="story 2" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/29.PNG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/30.PNG" alt="story 4" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/31.PNG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/32.PNG" alt="story 6" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/33.PNG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/34.PNG" alt="story 8" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/35.PNG" alt="story 9" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/36.PNG" alt="story 10" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/37.PNG" alt="story 11" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/38.PNG" alt="story 12" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/39.PNG" alt="story 13" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/40.PNG" alt="story 1" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/41.PNG" alt="story 2" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/42.PNG" alt="story 3" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/43.PNG" alt="story 4" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/44.PNG" alt="story 5" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/45.PNG" alt="story 6" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/46.PNG" alt="story 7" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/47.PNG" alt="story 8" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/48.PNG" alt="story 9" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/49.PNG" alt="story 10" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/50.PNG" alt="story 11" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/51.PNG" alt="story 12" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/52.PNG" alt="story 13" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/53.PNG" alt="story 12" /></a></figure></div>
                  <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2025_2/54.PNG" alt="story 13" /></a></figure></div>
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
