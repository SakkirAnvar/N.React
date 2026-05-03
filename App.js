import React from "react";
import ReactDOM from "react-dom/client";

//Header
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmaaj1dqXMUKLbNAjVKYq6OhtCmAuWEKIjg&s"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Body

const resList = [
  {
    info: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/c977fb20-70ec-45cd-8e46-e738e6cd562a_671928.JPG",
      locality: "7th Block",
      areaName: "Koramangla",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "7.1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10576",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/7a25cc2e-090a-4883-a7fa-f815c886a841_10576.JPG",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "3.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "621512",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/29ddfffe-7016-4548-ae60-1a8f348ffbe6_621512.jpg",
      locality: "K.H.B Colony",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-k-h-b-colony-koramangala-rest621512",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "393840",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Chikka Lakshmaiah Layout",
      areaName: "BTM",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "7.0K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹148",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-btm-rest393840",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "392828",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
      locality: "Chikka Lakshmaiah Layout",
      areaName: "BTM",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "434792",
      avgRatingString: "4.2",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/big-bowl-chikka-lakshmaiah-layout-btm-rest392828",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65075",
      name: "Homely",
      cloudinaryImageId: "xgwb49gf1wsle9zadntt",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4.2,
      parentId: "4043",
      avgRatingString: "4.2",
      totalRatingsString: "107K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 03:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/homely-6th-block-koramangala-rest65075",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "52990",
      name: "Oven Story Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/db1b05e9-4651-40ba-9386-1bd7a67418e6_52990.jpg",
      locality: "Jakkasandra",
      areaName: "Hsr Layout 5th Sector",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "3534",
      avgRatingString: "4.4",
      totalRatingsString: "6.4K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-02 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/oven-story-pizza-jakkasandra-hsr-layout-5th-sector-rest52990",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "534235",
      name: "Cheesecake & Co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery"],
      avgRating: 4.5,
      veg: true,
      parentId: "387417",
      avgRatingString: "4.5",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.0",
          ratingCount: "156",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "711368",
      name: "Salad Days",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/25096164-c2f3-4c3c-a6d8-eed9917375cd_711368.jpg",
      locality: "BTM Layout",
      areaName: "HSR",
      costForTwo: "₹500 for two",
      cuisines: ["Salads"],
      avgRating: 4.5,
      parentId: "796",
      avgRatingString: "4.5",
      totalRatingsString: "6.6K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "586682",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "aouhnkmtmchfkiowm8ou",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "Kebabs", "North Indian", "barbeque"],
      avgRating: 3.6,
      parentId: "351013",
      avgRatingString: "3.6",
      totalRatingsString: "875",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dum-safar-biryani-1st-block-koramangala-rest586682",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10820",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food",
      ],
      avgRating: 4.6,
      parentId: "1252",
      avgRatingString: "4.6",
      totalRatingsString: "47K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
            description: "Best in EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
            description: "Best in Corporate",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in EatRight",
                  imageId:
                    "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Corporate",
                  imageId:
                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹65",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "2.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/california-burrito-koramangala-rest10820",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "717421",
      name: "Paris Panini - Gourmet Sandwiches & Wraps",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/1b14de7e-7efc-4eaa-aa07-95f1ab50dc58_717421 (1).jpg",
      locality: "BTM Layout",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: [
        "sandwich",
        "wrap",
        "Fast Food",
        "Pastas",
        "Italian",
        "Salads",
        "Healthy Food",
        "Desserts",
        "Continental",
      ],
      avgRating: 4.6,
      parentId: "21019",
      avgRatingString: "4.6",
      totalRatingsString: "5.5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-02 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId: "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
            description: "Best in Gourmet",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Gourmet",
                  imageId:
                    "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "656392",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 06:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "105K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-03 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "4.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6d65d447-b377-4393-9d42-dc3c2ae35e70",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = ({resData}) => {
  // const resData = props

  const {name, cuisines, avgRating, costForTwo, sla} = resData?.info
 
  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
       <h4>{sla?.deliveryTime}Min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <h2>Search</h2>
      </div>
      <div className="restaurant-list">
        {
          resList.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
        
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />,
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<AppLayout />);
