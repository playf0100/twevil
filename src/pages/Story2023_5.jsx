import React, { useEffect } from 'react'
import { useTranslation } from '../i18n'

export default function Story2023_5() {
  const { t, lang } = useTranslation()
  const content = t('stories.2023_5.content') || []

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
                  <h1 className="tagline story_title">{t('stories.2023_5.title')}</h1>
                  <h6 className="story-subtitle">{t('stories.2023_5.subtitle')}</h6>
                  <div className="story-meta">{t('stories.2023_5.meta')}</div>
                </header>

                <div className="story-content">
                  {Array.isArray(content)
                    ? content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{content}</p>
                  }
                </div>
                <div className="item">
                    <figure className="alith_post_thumb_big">
                      <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src="/twevil/assets/images/storys/2023_5/14.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </figure>
                    <h2>{t('playVideo')}</h2>
                  </div>
                <div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/1.JPG" alt="story 1" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/2.PNG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/3.PNG" alt="story 3" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/4.PNG" alt="story 4" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/5.PNG" alt="story 5" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/6.PNG" alt="story 6" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/7.PNG" alt="story 7" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/8.PNG" alt="story 8" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/9.PNG" alt="story 9" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/10.PNG" alt="story 10" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/11.PNG" alt="story 11" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/12.PNG" alt="story 2" /></a></figure></div>
									<div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/2023_5/13.PNG" alt="story 3" /></a></figure></div>
								</div>
                  <div className="item">
                    <figure className="alith_post_thumb_big">
                      <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src="/twevil/assets/images/storys/2023_5/15.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h2>{t('playVideo')}</h2>
                    </figure>
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
