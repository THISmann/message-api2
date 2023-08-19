<?php

namespace app\controllers;
use app\models\Message;

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