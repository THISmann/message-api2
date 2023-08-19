<?php

namespace app\controllers;

class NoteController extends \yii\rest\ActiveController
{
    public $modelClass = 'app\models\Note';

    
    public function actionIndex()
    {
        return $this->render('index');
    }
}
