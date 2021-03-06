import React from 'react'

export default function Instruction() {
  return (
    <div>
        <h1 class='title'>五目並べ</h1>
        <p class='first-view'>
            五目並べ(ごもくならべ)とは、2人で行うボードゲームの一種。囲碁の道具を用いて行う簡単なゲームで、盤上に交互に石を置いていき、先に石を直線状に5個並べることを競う。
        </p>
        <h2 class='gaiyou-title'>概要</h2>
        <p class='gaiyou-desc'>
        囲碁同様、2人のプレイヤーが碁盤の上に黒、白の石1つずつ交互に置く。置く場所は原則として自由である。いったん置いた石は除かれない。先に自らの色の石を5個直線(縦、横、45度の斜め)に並べた方が勝ちである。
        <br />
正式ルールや大会、広く一般に認められた団体などは存在しない。日本以外にも知られており、ゲームが行われることがある(なお、五目並べのルールに制限を付けて先手・後手の均衡をとったものに連珠があり、こちらには団体があり段級制度や名人戦、世界大会などが存在する)。
        <br />
禁手のない五目並べは、両者が最善手を指し続けた場合、先手必勝となる。明治時代の1899年に黒岩涙香が必勝法を発見している。二人零和有限確定完全情報ゲームに分類される。
        <br />
歴史については、連珠項目内に記載があるので参照のこと。
        </p>
        <h2 class='yougo-title'>用語</h2>
        <div class='yougo-desc'>
            <h3 class='yougo-subtitle'>三</h3>
            <p class='yougo-detail'>活三とも言う。どちらかが3個直線で並べ、両端ともが止まって(その先に相手の石が置いてあるか、版の端に当たっていること)おらず、放置すると四連になる手のこと。間がひとつあいた三を飛び三といい、三と同じ効果がある。</p>

            <h3 class='yougo-subtitle'>四</h3>
            <p class='yougo-detail'>活四とも言う。どちらかが4個直線で並べる事。片端が止まっていてもよい。放置すると五連になる。間がひとつあいた四を飛び四といい、四と同じ効果がある。</p>

            <h3 class='yougo-subtitle'>長連</h3>
            <p class='yougo-detail'>どちらかが6個～9個直線で並ぶ事。長連でも勝ちとする場合と、長連では勝ちにならない場合がある。</p>

            <h3 class='yougo-subtitle'>四連</h3>
            <p class='yougo-detail'>達四、棒四とも言う。どちらかが4個直線で並んでおり、両端が空いている状態。相手は片方を止めてももう片方で五連となる為、これを先に作った側の勝ちが確定する。</p>

            <h3 class='yougo-subtitle'>三三</h3>
            <p class='yougo-detail'>どちらかが三を違う角度で同時に2つ作る事。相手は同時に2つの三を同時に止められない事が多い為、ほとんどの場合作った側の勝ちが確定する(ただし、禁じ手とされる事もある)。</p>

            <h3 class='yougo-subtitle'>四三</h3>
            <p class='yougo-detail'>どちらかが三と四を違う角度で同時に作ること。相手は三と四を同時に止められない事が多い為、ほとんどの場合作った側の勝ちが確定する(ただし、四の方を止めた事によって自分が四になった場合は、止める事ができる場合がある)。</p>

            <h3 class='yougo-subtitle'>四四</h3>
            <p class='yougo-detail'>どちらかが四を2つ同時に作ること。相手は2つの四を同時に止めることができないので、四四を作った側は勝ちが確定する。一直線上にできる事もある。</p>
        </div>
    </div>
  )
}
