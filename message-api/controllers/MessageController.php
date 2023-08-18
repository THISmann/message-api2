<?php

namespace app\controllers;

class MessageController extends \yii\rest\ActiveController
{
    public $modelClass = 'app\models\Message';

    
    public function actionIndex()
    {
        return $this->render('index');
    }
}