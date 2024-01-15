// Elements to be adjusted one scroll
harry = document.getElementById("harry")
harry2 = document.getElementById("fixedharry")
scroll_indicator = document.getElementById("indicator")
l_line = document.getElementById("leftline")
r_line = document.getElementById("rightline")

// Parameters
title_initial_pos = '50vh'

// Add effects
window.onscroll = scrollEffects
window.onresize = scrollEffects

function scrollEffects() {
    // Get browser compatible scroll location:
    let page_offset =
        (pageYOffset) ? pageYOffset :
        (document.documentElement.clientHeight) ? document.documentElement.scrollTop :
        (document.body) ? document.body.scrollTop :
        0;
    // Page highlight
    updatePageIndicator(page_offset)
    // Set animation end point
    threshold_offset = window.innerHeight*.41
    // Define fixed style for past the end point (prevent desync jiggling)
    if ( page_offset > threshold_offset )
    {
        harry.classList.add('invisible')
        harry2.classList.remove('invisible')
        l_line.style.width = '50vw'
        r_line.style.width = '50vw'
        return
    }
    // Else: remove fixed styles and calculate postions
    harry.classList.remove('invisible')
    harry2.classList.add('invisible')
    // Change top position of 
    diff = Math.max(page_offset - threshold_offset, 0)
    harry.style.top = diff+'px'
    // Font size
    initial_size = 80 //px
    target_size = .07*window.innerHeight // i.e. 7vh
    progress = Math.min( page_offset, threshold_offset ) / threshold_offset
    harry.style.fontSize = (target_size*progress**2 + initial_size*(1-progress**2)) + 'px'
    // Closing lines
    delayed_offset = Math.max(page_offset - window.innerHeight*.05, 0)
    line_progress = Math.min( delayed_offset, threshold_offset ) / threshold_offset
    linewidth = line_progress**3*50
    l_line.style.width = linewidth+'vw'
    r_line.style.width = linewidth+'vw'
}

function updatePageIndicator(scroll) {
    // > box that moves along to scroll to each page. 
    n_pages = site.pages.length
    indicator_width = 100/(n_pages-1)
    scroll_indicator.style.width = indicator_width + 'vw'
    initial_position = -indicator_width
    final_position = 100-indicator_width
    bottom_scroll = ((n_pages-1)*site.page_height) * window.innerHeight/100 + 3
    progress = scroll / bottom_scroll
    scroll_indicator.style.left = initial_position*(1-progress) + progress*final_position+'vw'
}

function scrollToElement( id ) {
    elem = document.getElementById( id )
    //elem.scrollIntoView( {
    //    behavior: 'smooth'
    //})
    scrollToLocation(document.documentElement, elem.parentElement.offsetTop-.15*window.innerHeight, 1000);
}

function scrollToTop() {
    scrollToLocation(document.documentElement, 0, 600);
}

function scrollToLocation(scrollLayer, destination, duration) {
    if (duration <= 0) {
        return;
    }
    const difference = destination - scrollLayer.scrollTop;
    const perTick = (difference / duration) * 10;

    setTimeout(() => {
        scrollLayer.scrollTop = scrollLayer.scrollTop + perTick;
        if (scrollLayer.scrollTop === destination) {
            return;
        }
        scrollToLocation(scrollLayer, destination, duration - 10);
    }, 10);
}
