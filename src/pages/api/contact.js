export default async function handler(req, res){
    if(req.method !== 'POST') return res.status(405).end()
    const data = req.body
    // You should hook this to your email provider, CRM or serverless function
    console.log('contact form submit', data)
    return res.status(200).json({ ok: true })
    }