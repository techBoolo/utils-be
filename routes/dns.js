import express from 'express';
import * as dnsController from '../controllers/dns.js';

const router = express.Router();

router.post('/resolve', dnsController.resolve);
router.post('/reverse', dnsController.reverse);

export default router;
