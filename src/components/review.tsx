import {ChangeEvent, useState} from 'react';

const StarTitles: {[key: number]: string} = {
  1: 'terrible',
  2: 'bad',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function Review(): JSX.Element {
  const [reviewData, setReviewData] = useState({
    review: '',
    rating: 0
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setReviewData({...reviewData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (_, index) => 5 - index).map((number) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={`${number}`} id={`${number}-stars`}
              type="radio" onChange={handleChange}
            >
            </input>
            <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label"
              title={StarTitles[number]}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={reviewData.review}
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled
          onClick={() => {}}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default Review;
