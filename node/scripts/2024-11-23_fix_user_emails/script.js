require('dotenv').config({ path: '../../.env' });
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const { getDbPool } = require('../../common/utils/db');

const pool = getDbPool();

async function processEmailUpdates() {
    try {
        const client = await pool.connect();
        client.release();
    } catch (err) {
        console.error('Script failed:', err);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

processEmailUpdates();
