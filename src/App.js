import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState,useEffect } from 'react';


/* import { Component } from 'react'; */
/*class App extends Component {
	constructor(){
		super();
		this.state = {
			monsters: [],
			searchString: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((users) => {this.setState(() => { return {monsters: users}})})
	}

	onSeachChange = event => {
		this.setState(()=>{return {searchString: event.target.value.toLowerCase()}})
	}

	render(){
		const {monsters, searchString} = this.state;
		const {onSeachChange} = this;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString));
		return (
			<div className="App">
				<h1 className='app-title'>Monster Search</h1>
				<SearchBox className='monsters-search-box' placeholder='Search Monster' onChnageHandler={onSeachChange}/>
				<CardList monsters={filteredMonsters}/>
			</div>
		);
    }
}*/

const App = () =>{
	const[searchField, setSearchField] = useState('');
	const[monsters, setMonsters] = useState([]);
	const[filteredMonsters, setFilteredMonsters] = useState(monsters);

	const onSeachChange = event => {
		setSearchField(event.target.value.toLowerCase())
	}
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then(monsters => setMonsters(monsters))
	}, [])

	useEffect(()=>{
		setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchField)));
	}, [monsters, searchField])

	return(
	<div className="App">
		<h1 className='app-title'>Monster Search</h1>
		<SearchBox className='monsters-search-box' placeholder='Search Monster' onChnageHandler={onSeachChange}/>
		<CardList monsters={filteredMonsters}/>
	</div>
	)
}

export default App;
