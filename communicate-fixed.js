import { createClient } from '@supabase/supabase-js';

// AIDAN Network Communication System
const SUPABASE_URL = 'https://yiffafrjaoztveqgvjlk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzM1NTEsImV4cCI6MjA2MzYwOTU1MX0.jG1Hth8Xqa8IoSXz-zij1_PapxFnXZJpWOJ3d6LWPH0';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const CHILD_FARMER_ID = 'anne-songhurst';
const PARENT_FARM_ID = 'ANISH-MASTER-001';

async function checkMessages() {
    try {
        console.log('🔍 Checking for messages from parent farm...');
        
        const { data, error } = await supabase
            .from('mcs_child_updates')
            .select('*')
            .eq('target_project_id', CHILD_FARMER_ID)
            .eq('status', 'pending')
            .order('created_at', { ascending: false })
            .limit(10);

        if (error) {
            console.error('❌ Error checking messages:', error);
            return;
        }

        if (data && data.length > 0) {
            console.log('📨 Messages from parent farm:');
            data.forEach(msg => {
                console.log(`[${msg.created_at}] ${msg.directive_type}: ${msg.message}`);
            });
        } else {
            console.log('📭 No new messages from parent farm');
        }
    } catch (err) {
        console.error('❌ Communication error:', err.message);
    }
}

async function sendUpdate(message, type = 'general') {
    try {
        console.log(`📤 Sending ${type} update to parent farm...`);
        
        const { error } = await supabase
            .from('mcs_child_updates')
            .insert({
                target_project_id: PARENT_FARM_ID,
                created_by: CHILD_FARMER_ID,
                directive_type: type,
                message: message,
                priority: type === 'urgent' ? 'high' : 'normal',
                metadata: {
                    sender: CHILD_FARMER_ID,
                    timestamp: new Date().toISOString()
                }
            });

        if (error) {
            console.error('❌ Error sending update:', error);
            return;
        }

        console.log('✅ Update sent successfully to parent farm');
    } catch (err) {
        console.error('❌ Communication error:', err.message);
    }
}

// Command line interface
const command = process.argv[2];
const message = process.argv[3];

switch (command) {
    case 'check':
        checkMessages();
        break;
    case 'send':
        if (!message) {
            console.log('Usage: node communicate-fixed.js send "your message"');
            process.exit(1);
        }
        sendUpdate(message, 'general');
        break;
    case 'status':
        if (!message) {
            console.log('Usage: node communicate-fixed.js status "status update"');
            process.exit(1);
        }
        sendUpdate(message, 'status');
        break;
    case 'urgent':
        if (!message) {
            console.log('Usage: node communicate-fixed.js urgent "urgent message"');
            process.exit(1);
        }
        sendUpdate(message, 'urgent');
        break;
    case 'deployment':
        if (!message) {
            console.log('Usage: node communicate-fixed.js deployment "deployment request"');
            process.exit(1);
        }
        sendUpdate(message, 'deployment');
        break;
    case 'help':
        if (!message) {
            console.log('Usage: node communicate-fixed.js help "help request"');
            process.exit(1);
        }
        sendUpdate(message, 'help');
        break;
    default:
        console.log('Available commands:');
        console.log('  check - Check for messages from parent farm');
        console.log('  send "message" - Send general update');
        console.log('  status "update" - Send status update');
        console.log('  urgent "message" - Send urgent message');
        console.log('  deployment "request" - Request deployment');
        console.log('  help "request" - Request help from parent');
        break;
}