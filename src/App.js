import './App.css';
import './responsive.css';
import Header from './components/header';
import Banner from './components/banner';
import BabeboxComponents from './components/babebox-components-block';
import BabeboxInside from './components/babebox-inside';
import Brands from './components/brands';
import PastBoxes from './components/past-boxes';
import Pricing from './components/pricing';
import ShopTrending from './components/shop-trending';
function App() {
  const babeboxInnerContent = [
    {
      image: 'images/Group 74.png',
      heading : 'Subscribe',
      para_1: 'Choose your plan and',
      para_2: 'hit subscribe!'
    },
    {
      image: 'images/Group 74.png',
      heading : 'We curate',
      para_1: 'We handpick the highest',
      para_2: 'quality beauty items!'
    },
    {
      image: 'images/Group 74.png',
      heading : 'We pack and ship',
      para_1: 'We pack your beauty box carefully',
      para_2: 'and ship it to you each month!'
    },
    {
      image: 'images/Group 74.png',
      heading : 'Enjoy and share',
      para_1: 'Try out your new beauty goodies',
      para_2: 'and share your looks using'
    }
  ]
  const babeboxInsideComponents = [
    {
      image: 'images/Group 130.png',
      heading: 'Full-sized products',
      sideBottomPara: 'No more sample size products. All of the BabeBox products are full-sized, premium & cruelty-free.'
    },
    {
      image: 'images/Group 131.png',
      heading: 'Exclusive and cruelty free',
      sideBottomPara: 'We include 100% cruelty-free products and we introduce you to new and exciting brands each month.'
    },
    {
      image: 'images/Group 132.png',
      heading: '$100+ value',
      sideBottomPara: 'Get at least $100 worth of cosmetics and skin care products in every BabeBox. We source our products from indie and big beauty brands that are cruelty-free certified.'
    }
  ]
  const brands = [
    {
      image: 'images/Image 2.png',
      BtnLink: '#'
    },
    {
      image: 'images/Image 4.png',
      BtnLink: '#'
    },
    {
      image: 'images/Image 6.png',
      BtnLink: '#'
    },
    {
      image: 'images/Appeal-Cosmetics.png',
      BtnLink: '#'
    },
    {
      image: 'images/Oryza-Beauty_5b7c6291-69b1-4420-8d12-0ce07efdedc0.png',
      BtnLink: '#'
    },
    {
      image: 'images/jericho.png',
      BtnLink: '#'
    },
    {
      image: 'images/Asthetica.png',
      BtnLink: '#'
    },
    {
      image: 'images/Image 3.png',
      BtnLink: '#'
    },
    {
      image: 'images/Image 1.png',
      BtnLink: '#'
    }
  ]
  const pastBoxes = [
    {
      image: 'images/past-box1.jpg',
      subHeading: 'April 2020',
      para: '(4.7 Rating) April \
      Discovery of BabeBox,Free Box Edition. Over $100+ of Products including Skin Care & \
      Makeup.',
      subImage: 'images/5-stars_100x.png',

    },
    {
      image: 'images/past-box2.jpg',
      subHeading: 'March 2020',
      para: '(4.7 Rating) April \
      Discovery of BabeBox,Free Box Edition. Over $100+ of Products including Skin Care & \
      Makeup.',
      subImage: 'images/5-stars_100x.png',

    },
    {
      image: 'images/past-box3.jpg',
      subHeading: 'February 2020',
      para: '(4.7 Rating) April \
      Discovery of BabeBox,Free Box Edition. Over $100+ of Products including Skin Care & \
      Makeup.',
      subImage: 'images/5-stars_100x.png',

    },
    {
      image: 'images/past-box4.jpg',
      subHeading: 'January  2020',
      para: '(4.7 Rating) April \
      Discovery of BabeBox,Free Box Edition. Over $100+ of Products including Skin Care & \
      Makeup.',
      subImage: 'images/5-stars_100x.png',

    }
  ]
  const pricingFeatures = [
    {
      image: 'images/Group 115.png',
      para: 'Genuine & high value',
      paraAlter: 'Guaranteed to have at least $100+ in products value on your BabeBox every \
      month!'
    },
    {
      image: 'images/Group 114.png',
      para: 'Premium picks',
      paraAlter: 'Guaranteed to have at least $100+ in products value on your BabeBox every \
      month!'
    },
    {
      image: 'images/Group 113.png',
      para: 'Cruelty-free',
      paraAlter: 'Guaranteed to have at least $100+ in products value on your BabeBox every \
      month!'
    }
  ]
  const pricingBottomBlock = [
    {
      mainHeading: 'Monthly',
      subHeading: '$29',
      heading4: 'FIRST BOX FREE',
      image1: 'images/Group 37.png',
      image2: 'images/Group 37.png',
      image1Text: 'over $80+ value',
      image2Text: 'Cancel at any time'
    },
    {
      mainHeading: '3 Months',
      subHeading: '$27/mo',
      heading4: 'FIRST BOX FREE',
      image1: 'images/Group 37.png',
      image2: 'images/Group 37.png',
      image1Text: 'over $80+ value',
      image2Text: 'Cancel at any time'
    },
    {
      mainHeading: '6 Months',
      subHeading: '$26/mo',
      heading4: 'FIRST BOX FREE',
      image1: 'images/Group 37.png',
      image2: 'images/Group 37.png',
      image1Text: 'over $80+ value',
      image2Text: 'Cancel at any time'
    },
    {
      mainHeading: '12 Months',
      subHeading: '$24/mo',
      heading4: 'FIRST BOX FREE',
      image1: 'images/Group 37.png',
      image2: 'images/Group 37.png',
      image1Text: 'over $80+ value',
      image2Text: 'Cancel at any time'
    }
  ]
  const shopUpperBlock = [
    {
      image: 'images/Group 66.png',
      para: 'EXCLUSIVE'
    },
    {
      image: 'images/Group 65.png',
      para: 'NEW'
    },
    {
      image: 'images/Group 67.png',
      para: 'EYES'
    },
    {
      image: 'images/Group 68.png',
      para: 'FACE'
    },
    {
      image: 'images/Group 69.png',
      para: 'LIPS'
    },
    {
      image: 'images/Group 73.png',
      para: 'SALE'
    }
  ]
  const shopLowerBlock = [
    {
      image: 'images/imageedit_22_4644677785_medium.png',
      heading: 'Illuminati Cosmetic',
      subHeading: 'Sponge',
      subHeadingSpan: '[Assorted]',
      strikeElement: '$25.00',
      para: '$21.00',
      starImage: 'images/5-stars_100x.png',
      btnText: 'ADD TO BAG',
      btnLink: 'javascript:void(0)'
    },
    {
      image: 'images/imageedit_33_4331842776_medium.png',
      heading: 'Illuminati Cosmetic',
      subHeading: 'Sponge',
      subHeadingSpan: '[Assorted]',
      strikeElement: '$25.00',
      para: '$21.00',
      starImage: 'images/5-stars_100x.png',
      btnText: 'ADD TO BAG',
      btnLink: 'javascript:void(0)'
    },
    {
      image: 'images/imageedit_5_6852869932_medium.png',
      heading: 'Illuminati Cosmetic',
      subHeading: 'Sponge',
      subHeadingSpan: '[Assorted]',
      strikeElement: '$25.00',
      para: '$21.00',
      starImage: 'images/5-stars_100x.png',
      btnText: 'ADD TO BAG',
      btnLink: 'javascript:void(0)'
    },
    {
      image: 'images/Aloha_large_72f0be8b-124b-47fa-ab97-ba33957a2913_medium.png',
      heading: 'Illuminati Cosmetic',
      subHeading: 'Sponge',
      subHeadingSpan: '[Assorted]',
      strikeElement: '$25.00',
      para: '$21.00',
      starImage: 'images/5-stars_100x.png',
      btnText: 'ADD TO BAG',
      btnLink: 'javascript:void(0)'
    },
    {
      image: 'images/imageedit_8_8241032832_medium.png',
      heading: 'Illuminati Cosmetic',
      subHeading: 'Sponge',
      subHeadingSpan: '[Assorted]',
      strikeElement: '$25.00',
      para: '$21.00',
      starImage: 'images/5-stars_100x.png',
      btnText: 'ADD TO BAG',
      btnLink: 'javascript:void(0)'
    }
  ]
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className='babebox-outer-container'>
      <BabeboxComponents babeboxInnerContent={babeboxInnerContent}/>
      </div>
      <Brands brands={brands}/>
      <BabeboxInside babeboxInsideComponents={babeboxInsideComponents}/>
      <PastBoxes pastBoxes={pastBoxes}/>
      <Pricing pricingBottomBlock={pricingBottomBlock} pricingFeatures={pricingFeatures}/>
      <ShopTrending shopUpperBlock={shopUpperBlock} shopLowerBlock={shopLowerBlock}/>
    </div>
  );
}

export default App;
