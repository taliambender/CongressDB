// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const senators = [
	{name:'dianne feinstein', state:'ca'},
	{name:'charles schumer', state:'ny'},
	{name:'richard burr', state:'nc'},
	{name:'tom tillis', state:'nc'}
]
router.get('/', (req, res) => {


	// Here, we answer the "question"
	//res.send('Hello. Welcome to Congress DB!')
	res.render('index')
})

router.get('/senate', (req, res) => {
	const state = req.query.state
	console.log('STATE == ' +state)
	if (state != null){
		const stateSenators = []
		senators.forEach(senator => {
			if (senator.state == state)
				stateSenators.push(senator)
		})

		const data = {
			list: stateSenators,
			greeting: 'Senators from '+state
		}

			res.render('senate', data)
			return
	}

	const data = {
		list: senators,
		greeting: 'Current US Senators 2019'
	}

	res.render('senate', data)
})


module.exports = router
