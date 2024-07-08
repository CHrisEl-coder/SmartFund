import { useState } from 'react';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi'

const article = [
    {
        author: 'Sarah Smith',
        title: 'What Is Decentralized Market',
        blogPost: 'Decentralized Market Is A Market With Digital Technology That Facilitates The Buying And Selling Of Securities Directly From The Buyer To Seller Without Either Having To Visit An Exchange.'
    },

    {
        author: 'Mr. Micheal',
        title: 'What Is CryptoCurrency',
        blogPost: 'CryptoCurrency Is A Digital Currency Secured By Cryptography That Doesnt Rely On The Local Institute To Verify Its Transaction, And Can Be Transferred WorldWide. '
    },

    {
        author: 'Catherine Paul',
        title: 'What Is CryptoGraphy',
        blogPost: 'CryptoGraphy Is A method of keeping information secret and secure by scrambling it into indecipherable codes. The information can only be decrypted and read with the necessary key'
    },

    {
        author: 'Aisha Williams',
        title: 'What Is Hash',
        blogPost: ' A hash is the result of a piece of data being put through a special hashing algorithm. It compresses data into a nearly unique alphanumeric string of text. This is important in cryptocurrency because a blockchain is an immutable record of transactions, and hashing  can uncover attempts to illegitimately alter or change data.'
    },

    {
        author: 'Jackspon Pierce',
        title: 'What Is Mining',
        blogPost: 'Crypto mining is the process of verifying transactions via a proof of work consensus mechanism. Mining involves using computer hardware to solve a hash with trillions of possible combinations. The more computing power you have, the more guesses you can make within each given window of time, and the greater your chances of earning newly minted crypto.'
    },

    {
        author: 'Joel Stan',
        title: 'What Is P2P (Peer to Peer',
        blogPost: 'Short for peer-to-peer. Refers to a transaction between two people without an intermediary or central authority involved.'
    }
];

const FactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % article.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + article.length) % article.length);
  };

  return (
    <div className="article">
      <h1>Nuggets</h1>
      <div className="nuggets">
        <h4>{article[currentSlide].title}</h4>
        <p className="testimonial-content">{article[currentSlide].blogPost}</p>
        <p className="testimonial-author">- {article[currentSlide].author}</p>
      </div>
      <div className="slider-controls">
        <TfiAngleLeft className='arrow' onClick={prevSlide} />
        <TfiAngleRight className='arrow' onClick={nextSlide} />
      </div>
    </div>
  );
};

export default FactSlider;
