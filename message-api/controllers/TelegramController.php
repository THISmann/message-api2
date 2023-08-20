<?php
use yii\web\Controller;
use Longman\TelegramBot\Telegram;
use Longman\TelegramBot\Request;

class TelegramController extends Controller
{
    public function actionSendMessage($message)
    {
        $telegramConfig = Yii::$app->params['telegram'];

        $telegram = new Telegram($telegramConfig['6429369284:AAGv79g5RILiKi2QNbTr-NZYmbRUz8u0iUM'], $telegramConfig['longman00_bot']);

        // Replace 'YOUR_CHANNEL_ID' with your channel or chat ID
        $chatId = '6429369284';

        $result = Request::sendMessage([
            'chat_id' => $chatId,
            'text' => $message,
        ]);

        if ($result->isOk()) {
            return ['success' => true, 'message' => 'Message sent successfully'];
        } else {
            return ['success' => false, 'message' => 'Error sending message'];
        }
    }
}
