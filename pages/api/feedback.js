import { IncomingWebhook } from '@slack/webhook';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await postHandler(req, res);
    } else {
        res.status(405).send(null);
    }
}

const isValid = (n, m) => /\S/.test(n) && /\S/.test(m)

async function postHandler(req, res) {
    const url = process.env.SLACK_WEBHOOK
    const webhook = new IncomingWebhook(url);
    const { name, message } = JSON.parse(req.body);
    if (name && message && isValid(name, message)) {
        const response = await webhook.send({
            "text": `New review.`,
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*${name}*`
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `_${message}_`
                    }
                },
            ]
        })
        response.text === `ok`
            ? res.status(200).send({ message: 'success' })
            : res.status(400).send({ message: 'upstream bad request.' })
        return
    }
    res.status(400).send({
        message: 'client bad request'
    })

}