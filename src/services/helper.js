export function splitTextAtDot(text) {
  // Calculate the halfway point
  let mid = Math.floor(text.length / 2)

  // Find the nearest dot to the halfway point
  let splitPos = mid
  while (splitPos < text.length && text[splitPos] !== '.') {
    splitPos++
  }

  // If no dot is found after the halfway point, search before it
  if (splitPos === text.length) {
    splitPos = mid
    while (splitPos > 0 && text[splitPos] !== '.') {
      splitPos--
    }
  }

  // Split the text into two parts and return them as an array
  return [text.slice(0, splitPos + 1), text.slice(splitPos + 1)]
}

export const getDomainName = (url) => {
  // Extract the base domain name from a URL.
  const regex = /(facebook|instagram|youtube|tiktok|twitter)/
  const match = url.match(regex)
  return match ? match[1] : null
}

export const createObjectSocial = (arr) => {
  const domainToUrlMap = {}
  arr.forEach((url) => {
    const domain = getDomainName(url)
    domainToUrlMap[domain] = url
  })
  return domainToUrlMap
}

// Create a map of domain names to URLs

export const filterSocialMedia = (socialMedia, navigation) => {
  // Filter and map the navigation array to include the URLs from socialMedia
  const updatedNavigation = navigation.reduce((acc, navItem) => {
    // Extract the social media name from the URL
    const socialMediaFound = socialMedia.find((url) => {
      const match = getDomainName(url)
      return navItem.name.toLowerCase() === match
    })
    // If found, update the href and set visible to true, else set visible to false
    if (socialMediaFound) {
      navItem.href = socialMediaFound
      navItem.visible = true
    } else {
      navItem.visible = false
    }

    acc.push(navItem)
    return acc
  }, [])

  return updatedNavigation
}
