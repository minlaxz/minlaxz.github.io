export default async function handler(req, res) {
    if (req.method === 'GET') {
        await getHandler(req, res);
    }
    else {
        res.status(405).send(null);
    }
}

async function getHandler(req, res) {
    const url = process.env.SERVERLESS_API_URL;
    console.log(req.query)
    let repo = req.query?.repo;
    let branch = req.query?.branch;
    let user = req.query?.user;
    if (! repo) {
        res.status(400).send({ message: 'repo is required' });
        return;
    }
    if (! branch) {
        branch = 'main';
    }
    if (! user) {
        user = 'minlaxz';
    }
    const response = await fetch(`${url}/lastcommit?repo=${repo}`);
    // const data = await response.json();
    res.status(200).send(response);
}