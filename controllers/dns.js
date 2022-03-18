import dns from 'dns';

const dnsPromises = dns.promises

export const resolve = async (req, res, next) => {
  try {
    const { hostname } = req.body
    const ips = await dnsPromises.resolve(hostname); 
    res.status(200).json({ message: 'dns resolver', ips })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: { message: error.message} })
  }
}

export const reverse = async (req, res, next) => {
  try {
    const { ip } = req.body;
    const hostnames = await dnsPromises.reverse(ip) 
    res.status(200).json({ message: 'dns reverse', hostnames })
  } catch (error) {
    console.log(error.message);
    res.status(400).json({error: { message: error.message }})
  }
}
