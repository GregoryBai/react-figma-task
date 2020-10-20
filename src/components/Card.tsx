import React from 'react'
import './Card.scss'
import { CardType } from '../types/types'

interface Props {
	data: CardType
	handleSelect(id: number | undefined, mode: 'select' | 'deselect'): void
}

const Card: React.FC<Props> = props => {
	let {
		data: {
			title,
			slogan,
			flavor,
			portionSize,
			portionSizeText,
			miceSize,
			miceSizeText,
			portionWeight,
			portionUnit,
			cardClass,
			bottomTextDisabled,
			bottomTextSelected,
			id,
		},
		handleSelect,
	} = props

	return (
		<div className='card__container'>
			<div
				onClick={() => handleSelect(id, 'select')}
				onDoubleClick={() => handleSelect(id, 'deselect')}
				className={`card ${cardClass}`}>
				<p className='card__slogan'>{slogan}</p>
				<h3 className='card__title'>{title}</h3>
				<p className='card__flavor'>{flavor}</p>
				<p className='card__bodyText'>
					<span className='bodyText__portionSize'>{portionSize || ''}</span>
					&nbsp;
					<span className='bodyText__portionSizeText'>{portionSizeText}</span>
					&nbsp;
					<span className='bodyText__miceSize'>{miceSize || ''}</span>
					&nbsp;
					<span className='bodyText__miceSizeText'>{miceSizeText}</span>
					&nbsp;
				</p>
				<div className='card__portion'>
					<p className='portion__weight'>{portionWeight}</p>
					<p className='portion__unit'>{portionUnit}</p>
				</div>
			</div>
			{cardClass === 'card--default' ? (
				<p className='bottom__text'>
					Чего сидишь? Порадуй котэ, &nbsp;
					<span
						onClick={() => handleSelect(id, 'select')}
						className='text__link'>
						купи
					</span>
					<span className='text__period'>.</span>
				</p>
			) : cardClass === 'card--selected' ? (
				<p className='bottom__text'>{bottomTextSelected}</p>
			) : (
				<p className='bottom__text'>{bottomTextDisabled}</p>
			)}
		</div>
	)
}

export default Card
