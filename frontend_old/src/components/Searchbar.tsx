import React from 'react'

export interface SearchbarProps {}

const Searchbar: React.SFC<SearchbarProps> = () => {
	return (
		<div className='searchbar'>
			<input type='text' />
			<i className='ti-search'></i>
		</div>
	)
}

export default Searchbar
