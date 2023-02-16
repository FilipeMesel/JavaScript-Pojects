import express, { json } from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {convertHourStringToMinutes} from './utils/convert-hours-string-to-minutes'
import {convertStringMinutesToHourString} from './utils/convert-minutes-to-hours'

const app = express()
app.use(cors())
app.use(express.json()) //avisa ao express para receber json no body
const prisma = new PrismaClient({
	log: ['query']
})


app.get('/games', async (request, response) => {
    console.log("Listagem de games!");
	const games = await prisma.game.findMany({
		include: {
			_count: {
				select: {
					ads: true,
				}
			}
		}
	}) //Retorna todos os jogos da tabela "games"
	//Essa instrução é assíncrona!
    return response.json(games);
});

app.post('/games/:id/ads', async(request, response) => {
    console.log("Criação de games!");
	const gameId = request.params.id
	const body: any = request.body;

//O ideal é fazer a validação dos dados com a biblioteca zod javascript

//aqui estamos criando um novo ad com os dados passados no body da requisição
	const ad = await prisma.ad.create({
		data: {
			gameId,
			name: body.name,
			yearsPlaying: body.yearsPlaying,
			discord: body.discord,
			weekDays: body.weekDays.join(','),
			hourStart: convertHourStringToMinutes(body.hourStart),
			hourEnd: convertHourStringToMinutes(body.hourEnd),
			useVoiceChannel: body.useVoiceChannel,

		}
	})

    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async(request, response) => {
	const gameId: any = request.params.id
	const ads = await prisma.ad.findMany({
		select: {
			id: true,
			name: true,
			weekDays: true,
			useVoiceChannel: true,
			yearsPlaying: true,
			hourStart: true,
			hourEnd: true
		},
		where: {
			gameId,
		},
		orderBy: {
			createdAt: 'desc'
		}
	})
	console.log("Acessou a rota Ads!")
	return response.send(ads.map(ad => {
		return {
			...ad,
			weekDays: ad.weekDays.split(','),
			hourStart: convertStringMinutesToHourString(ad.hourStart),
			hourEnd: convertStringMinutesToHourString(ad.hourEnd),
		}
	}))
})

app.get('/ads/:id/discord', async(request, response) => {
	const AdId = request.params.id
	console.log("Acessou a rota Ads!")
	const ad = await prisma.ad.findUniqueOrThrow({ //Vai tentar encontrar um ad. Se não conseguir, vai disparar um erro
		select: {
			discord: true,
		},
		where: {
			id: AdId,

		}
	})
	return response.json({
		discord: ad.discord
	})
})


app.listen(3333)