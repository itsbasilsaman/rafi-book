import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      domains: [
        "images.unsplash.com",
        "plus.unsplash.com",
        "images.pexels.com",
        "idsb.tmgrup.com.tr",
        "www.tripsavvy.com",
        "www.tourmyindia.com",
        "tourwithrahul.com",
        "www.planetware.com",
        "wallpapercave.com",
        "realhappiness.org",
        "vietnamvisavoa.com",
        "treebo.com",
        "photojaanic.com",
        "www.treebo.com",
        "a.cdn-hotels.com",
        "www.photojaanic.com",
        "globalgrasshopper.com",
        "cdn-icons-png.flaticon.com",
        "cdn-icons-png.flaticon.com",
        "www.tastingtable.com",
        "d2rdhxfof4qmbb.cloudfront.net",
        "seoimgak.mmtcdn.com",
        "static.vecteezy.com",
        "img.veenaworld.com",
        "indiafacts.org",
        "www.clearias.com",
        "assets.traveltriangle.com",
        "i.assetzen.net",
        "www.lordsayurveda.com",
        "miro.medium.com",
        "wallpaperaccess.com",
        "www.globalbusinessculture.com",
        "images.news9live.com",
        "m.economictimes.com",
        "clipart-library.com",
        "wallup.net",
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.resized.co",
        },
        {
          protocol: "https",
          hostname: "c.stocksy.com",
        },
        {
          protocol: "https",
          hostname: "image.freepik.com",
        },
        {
          protocol: "https",
          hostname: "tse1.mm.bing.net",
        },
      ],
    }
};

export default nextConfig;
