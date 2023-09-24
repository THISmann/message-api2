<?php

namespace app\controllers;
use app\models\Message;
use OpenApi\Annotations as OA;


/**
 * @OA\Info(title="My first API", version="1.0")
 */
class MessageController extends \yii\rest\ActiveController
{
    public $modelClass = 'app\models\Message';

    
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionFindByCafe($id_cafe)
    {
        $messages = Message::find()
            ->where(['id_cafe' => $id_cafe])
            ->all();

        return  $messages;
    }
}