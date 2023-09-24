<?php

 

use Yii;
use app\controllers\MessageController;
use app\models\Message;
use yii\web\Request;

class MessageControllerTest extends \PHPUnit\Framework\TestCase
{
    public function testActionFindByCafe()
    {
        // Create a new instance of the controller
        $controller = new MessageController('message', Yii::$app);

        // Create a request object with the necessary query parameters
        $request = new Request();
        $request->setQueryParams(['id_cafe' => 1]);
        Yii::$app->set('request', $request);

        // Call the action
        $result = $controller->actionFindByCafe(1);

        // Assert that the result is an array of messages
        $this->assertIsArray($result);

        // Assert that each item in the result array is an instance of Message model
        foreach ($result as $message) {
            $this->assertInstanceOf(Message::class, $message);
        }

        // You can add more assertions as needed based on your requirements
    }
}
