<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use AWS;

class FileController extends Controller
{
    public function upload($bucket, $fileName) {
        $s3 = AWS::createClient('s3');
        $s3->putObject(array(
            'Bucket'     => $bucket,
            'Key'        => $fileName,
            'SourceFile' => 'uploads/business/logo/1.jpg',
        ));
    }
}