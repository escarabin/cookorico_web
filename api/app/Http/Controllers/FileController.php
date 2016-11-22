<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use AWS;
use Log;

class FileController extends Controller
{
    public function upload($bucket, $fileName, $filePath) {
        $s3 = AWS::createClient('s3');

        $s3->putObject(array(
            'Bucket'     => $bucket,
            'Key'        => $fileName,
            'SourceFile' => $filePath,
        ));
    }
}