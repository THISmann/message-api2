<?php
use Yii;
use yii\web\Controller;
use Longman\TelegramBot\Request;
use vendor\autoload;


class TelegramController extends Controller
{
    public function actionSendMessage()
    {
        $botToken = '';
        $chatId = '';
        $message = '';

        $response = Request::sendMessage([
           // 'botToken' => $botToken,
            'chat_id' => $chatId,
            'text' => $message,
        ], $botToken);

        if ($response->isOk()) {
            return 'Message sent successfully!';
        } else {
            return 'Failed to send message.';
        }
    }
}
