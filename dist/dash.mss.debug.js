(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventsBase = (function () {
    function EventsBase() {
        _classCallCheck(this, EventsBase);
    }

    _createClass(EventsBase, [{
        key: 'extend',
        value: function extend(events, config) {
            if (!events) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var evt in events) {
                if (!events.hasOwnProperty(evt) || this[evt] && !override) continue;
                if (publicOnly && events[evt].indexOf('public_') === -1) continue;
                this[evt] = events[evt];
            }
        }
    }]);

    return EventsBase;
})();

exports['default'] = EventsBase;
module.exports = exports['default'];

},{}],2:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_('../core/events/EventsBase');

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

var MssEvents = (function (_EventsBase) {
    _inherits(MssEvents, _EventsBase);

    function MssEvents() {
        _classCallCheck(this, MssEvents);

        _get(Object.getPrototypeOf(MssEvents.prototype), 'constructor', this).call(this);

        this.FRAGMENT_INFO_LOADING_COMPLETED = 'fragmentInfoLoadingCompleted';
    }

    return MssEvents;
})(_coreEventsEventsBase2['default']);

var mssEvents = new MssEvents();
exports['default'] = mssEvents;
module.exports = exports['default'];

},{"../core/events/EventsBase":1}],3:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

function MssFragmentInfoController(config) {

    config = config || {};
    var context = this.context;

    var instance = undefined;
    var fragmentModel = undefined;
    var indexHandler = undefined;
    var started = undefined;
    var type = undefined;
    var bufferTimeout = undefined;
    var _fragmentInfoTime = undefined;
    var startFragmentInfoDate = undefined;
    var startTimeStampValue = undefined;
    var deltaTime = undefined;
    var segmentDuration = undefined;

    var streamProcessor = config.streamProcessor;
    var eventBus = config.eventBus;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var ISOBoxer = config.ISOBoxer;
    var log = config.log;

    var controllerType = 'MssFragmentInfoController';

    function setup() {}

    function initialize() {
        started = false;

        startFragmentInfoDate = null;
        startTimeStampValue = null;
        deltaTime = 0;
        segmentDuration = NaN;

        // register to stream processor as external controller
        streamProcessor.registerExternalController(instance);
        type = streamProcessor.getType();
        fragmentModel = streamProcessor.getFragmentModel();
        indexHandler = streamProcessor.getIndexHandler();
    }

    function getCurrentRepresentation() {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();

        return representation;
    }

    function sendRequest(request) {
        fragmentModel.executeRequest(request);
    }

    function asFragmentInfoRequest(request) {
        if (request && request.url) {
            request.url = request.url.replace('Fragments', 'FragmentInfo');
            request.type = 'FragmentInfoSegment';
        }

        return request;
    }

    function onFragmentRequest(request) {

        // Check if current request signals end of stream
        if (request !== null && request.action === request.ACTION_COMPLETE) {
            doStop();
            return;
        }

        if (request !== null) {
            _fragmentInfoTime = request.startTime + request.duration;
            request = asFragmentInfoRequest(request);

            if (streamProcessor.getFragmentModel().isFragmentLoadedOrPending(request)) {
                request = indexHandler.getNextSegmentRequest(getCurrentRepresentation());
                onFragmentRequest(request);
                return;
            }

            log('[FragmentInfoController][' + type + '] onFragmentRequest ' + request.url);

            // Download the fragment info segment
            sendRequest(request);
        } else {
            // No more fragment in current list
            log('[FragmentInfoController][' + type + '] bufferFragmentInfo failed');
        }
    }

    function bufferFragmentInfo() {
        var segmentTime;

        // Check if running state
        if (!started) {
            return;
        }

        log('[FragmentInfoController][' + type + '] Start buffering process...');

        // Get next segment time
        segmentTime = _fragmentInfoTime;

        log('[FragmentInfoController][' + type + '] loadNextFragment for time: ' + segmentTime);

        var representation = getCurrentRepresentation();
        var request = indexHandler.getSegmentRequestForTime(representation, segmentTime);
        onFragmentRequest(request);
    }

    function delayLoadNextFragmentInfo(delay) {
        var delayMs = Math.round(Math.min(delay * 1000, 2000));

        log('[FragmentInfoController][' + type + '] Check buffer delta = ' + delayMs + ' ms');

        clearTimeout(bufferTimeout);
        bufferTimeout = setTimeout(function () {
            bufferTimeout = null;
            bufferFragmentInfo();
        }, delayMs);
    }

    function onFragmentInfoLoadedCompleted(e) {
        if (e.streamProcessor !== streamProcessor) {
            return;
        }

        var request = e.fragmentInfo.request;
        var deltaDate = undefined,
            deltaTimeStamp = undefined;

        if (!e.fragmentInfo.response) {
            log('[FragmentInfoController][' + type + '] ERROR loading ', request.url);
            return;
        }

        segmentDuration = request.duration;
        log('[FragmentInfoController][' + type + '] FragmentInfo loaded ', request.url);
        try {

            // update segment list
            var mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
                metricsModel: metricsModel,
                playbackController: playbackController,
                ISOBoxer: ISOBoxer,
                log: log
            });
            mssFragmentMoofProcessor.updateSegmentList(e.fragmentInfo, streamProcessor);

            deltaDate = (new Date().getTime() - startFragmentInfoDate) / 1000;
            deltaTimeStamp = _fragmentInfoTime + segmentDuration - startTimeStampValue;
            deltaTime = deltaTimeStamp - deltaDate > 0 ? deltaTimeStamp - deltaDate : 0;
            delayLoadNextFragmentInfo(deltaTime);
        } catch (e) {
            log('[FragmentInfoController][' + type + '] ERROR - Internal error while processing fragment info segment ');
        }
    }

    function startPlayback() {
        if (!started) {
            return;
        }

        startFragmentInfoDate = new Date().getTime();
        startTimeStampValue = _fragmentInfoTime;

        log('[FragmentInfoController][' + type + '] startPlayback');

        // Start buffering process
        bufferFragmentInfo.call(this);
    }

    function doStart() {

        var segments = undefined;

        if (started === true) {
            return;
        }

        eventBus.on(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        started = true;
        log('[FragmentInfoController][' + type + '] START');

        var representation = getCurrentRepresentation();
        segments = representation.segments;

        if (segments && segments.length > 0) {
            _fragmentInfoTime = segments[segments.length - 1].presentationStartTime - segments[segments.length - 1].duration;

            startPlayback();
        } else {
            indexHandler.updateSegmentList(representation);
            segments = representation.segments;
            if (segments && segments.length > 0) {
                _fragmentInfoTime = segments[segments.length - 1].presentationStartTime - segments[segments.length - 1].duration;
            }

            startPlayback();
        }
    }

    function doStop() {
        if (!started) {
            return;
        }
        log('[FragmentInfoController][' + type + '] STOP');

        eventBus.off(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        // Stop buffering process
        clearTimeout(bufferTimeout);
        started = false;

        startFragmentInfoDate = null;
        startTimeStampValue = null;
    }

    function reset() {
        doStop();
        streamProcessor.unregisterExternalController(instance);
    }

    instance = {
        initialize: initialize,
        controllerType: controllerType,
        start: doStart,
        reset: reset
    };

    setup();

    return instance;
}

MssFragmentInfoController.__dashjs_factory_name = 'MssFragmentInfoController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentInfoController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./MssEvents":2,"./MssFragmentMoofProcessor":4}],4:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MssFragmentMoofProcessor(config) {

    config = config || {};
    var instance = undefined;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var errorHandler = config.errHandler;
    var ISOBoxer = config.ISOBoxer;
    var log = config.log;

    function setup() {}

    function processTfrf(request, tfrf, tfdt, streamProcessor) {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();
        var indexHandler = streamProcessor.getIndexHandler();

        var manifest = representation.adaptation.period.mpd.manifest;
        var adaptation = manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index];
        var timescale = adaptation.SegmentTemplate.timescale;

        if (manifest.type !== 'dynamic') {
            return;
        }

        if (!tfrf) {
            errorHandler.mssError('MSS_NO_TFRF : Missing tfrf in live media segment');
            return;
        }

        // Get adaptation's segment timeline (always a SegmentTimeline in Smooth Streaming use case)
        var segments = adaptation.SegmentTemplate.SegmentTimeline.S;
        var entries = tfrf.entry;
        var entry = undefined,
            segmentTime = undefined;
        var segment = null;
        var type = adaptation.contentType;
        var t = 0;
        var availabilityStartTime = null;
        var range = undefined;

        if (entries.length === 0) {
            return;
        }

        // Consider only first tfrf entry (to avoid pre-condition failure on fragment info requests)
        entry = entries[0];

        // Get last segment time
        segmentTime = segments[segments.length - 1].tManifest ? parseFloat(segments[segments.length - 1].tManifest) : segments[segments.length - 1].t;

        // Check if we have to append new segment to timeline
        if (entry.fragment_absolute_time <= segmentTime) {

            // Update DVR window range
            // => set range end to end time of current segment
            range = {
                start: segments[0].t / adaptation.SegmentTemplate.timescale,
                end: tfdt.baseMediaDecodeTime / adaptation.SegmentTemplate.timescale + request.duration
            };

            updateDVR(request.mediaType, range, streamProcessor.getStreamInfo().manifestInfo);
            return;
        }

        log('[MssFragmentMoofProcessor][', type, '] Add new segment - t = ', entry.fragment_absolute_time / timescale);
        segment = {};
        segment.t = entry.fragment_absolute_time;
        segment.d = entry.fragment_duration;
        segments.push(segment);

        //
        if (manifest.timeShiftBufferDepth && manifest.timeShiftBufferDepth > 0) {
            // Get timestamp of the last segment
            segment = segments[segments.length - 1];
            t = segment.t;

            // Determine the segments' availability start time
            availabilityStartTime = t - manifest.timeShiftBufferDepth * timescale;

            // Remove segments prior to availability start time
            segment = segments[0];
            while (segment.t < availabilityStartTime) {
                log('[MssFragmentMoofProcessor]Remove segment  - t = ' + segment.t / timescale);
                segments.splice(0, 1);
                segment = segments[0];
            }

            // Update DVR window range
            // => set range end to end time of current segment
            range = {
                start: segments[0].t / adaptation.SegmentTemplate.timescale,
                end: tfdt.baseMediaDecodeTime / adaptation.SegmentTemplate.timescale + request.duration
            };

            updateDVR(request.mediaType, range, streamProcessor.getStreamInfo().manifestInfo);
        }

        indexHandler.updateSegmentList(representation);
    }

    function updateDVR(type, range, manifestInfo) {
        var dvrInfos = metricsModel.getMetricsFor(type).DVRInfo;
        if (dvrInfos) {
            if (dvrInfos.length === 0 || dvrInfos.length > 0 && range.end > dvrInfos[dvrInfos.length - 1].range.end) {
                log('[MssFragmentMoofProcessor][', type, '] Update DVR Infos [' + range.start + ' - ' + range.end + ']');
                metricsModel.addDVRInfo(type, playbackController.getTime(), manifestInfo, range);
            }
        }
    }

    // This function returns the offset of the 1st byte of a child box within a container box
    function getBoxOffset(parent, type) {
        var offset = 8;
        var i = 0;

        for (i = 0; i < parent.boxes.length; i++) {
            if (parent.boxes[i].type === type) {
                return offset;
            }
            offset += parent.boxes[i].size;
        }
        return offset;
    }

    function convertFragment(e, sp) {

        var i = undefined;

        // e.request contains request description object
        // e.response contains fragment bytes
        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var trun = isoFile.fetch('trun');

        // Process tfxd boxes
        // This box provide absolute timestamp but we take the segment start time for tfdt
        var tfxd = isoFile.fetch('tfxd');
        if (tfxd) {
            tfxd._parent.boxes.splice(tfxd._parent.boxes.indexOf(tfxd), 1);
            tfxd = null;
        }
        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }

        // If protected content in PIFF1.1 format (sepiff box = Sample Encryption PIFF)
        // => convert sepiff box it into a senc box
        // => create saio and saiz boxes (if not already present)
        var sepiff = isoFile.fetch('sepiff');
        if (sepiff !== null) {
            sepiff.type = 'senc';
            sepiff.usertype = undefined;

            var _saio = isoFile.fetch('saio');
            if (_saio === null) {
                // Create Sample Auxiliary Information Offsets Box box (saio)
                _saio = ISOBoxer.createFullBox('saio', traf);
                _saio.version = 0;
                _saio.flags = 0;
                _saio.entry_count = 1;
                _saio.offset = [0];

                var saiz = ISOBoxer.createFullBox('saiz', traf);
                saiz.version = 0;
                saiz.flags = 0;
                saiz.sample_count = sepiff.sample_count;
                saiz.default_sample_info_size = 0;
                saiz.sample_info_size = [];

                if (sepiff.flags & 0x02) {
                    // Sub-sample encryption => set sample_info_size for each sample
                    for (i = 0; i < sepiff.sample_count; i += 1) {
                        // 10 = 8 (InitializationVector field size) + 2 (subsample_count field size)
                        // 6 = 2 (BytesOfClearData field size) + 4 (BytesOfEncryptedData field size)
                        saiz.sample_info_size[i] = 10 + 6 * sepiff.entry[i].NumberOfEntries;
                    }
                } else {
                    // No sub-sample encryption => set default sample_info_size = InitializationVector field size (8)
                    saiz.default_sample_info_size = 8;
                }
            }
        }

        tfhd.flags &= 0xFFFFFE; // set tfhd.base-data-offset-present to false
        tfhd.flags |= 0x020000; // set tfhd.default-base-is-moof to true
        trun.flags |= 0x000001; // set trun.data-offset-present to true

        // Update trun.data_offset field that corresponds to first data byte (inside mdat box)
        var moof = isoFile.fetch('moof');
        var length = moof.getLength();
        trun.data_offset = length + 8;

        // Update saio box offset field according to new senc box offset
        var saio = isoFile.fetch('saio');
        if (saio !== null) {
            var trafPosInMoof = getBoxOffset(moof, 'traf');
            var sencPosInTraf = getBoxOffset(traf, 'senc');
            // Set offset from begin fragment to the first IV field in senc box
            saio.offset[0] = trafPosInMoof + sencPosInTraf + 16; // 16 = box header (12) + sample_count field size (4)
        }

        // Write transformed/processed fragment into request reponse data
        e.response = isoFile.write();
    }

    function updateSegmentList(e, sp) {

        // e.request contains request description object
        // e.response contains fragment bytes
        if (!e.response) {
            throw new Error('e.response parameter is missing');
        }

        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }
    }

    instance = {
        convertFragment: convertFragment,
        updateSegmentList: updateSegmentList
    };

    setup();
    return instance;
}

MssFragmentMoofProcessor.__dashjs_factory_name = 'MssFragmentMoofProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoofProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],5:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MssFragmentMoovProcessor(config) {
    config = config || {};
    var NALUTYPE_SPS = 7;
    var NALUTYPE_PPS = 8;
    var constants = config.constants;
    var ISOBoxer = config.ISOBoxer;

    var protectionController = config.protectionController;
    var instance = undefined,
        period = undefined,
        adaptationSet = undefined,
        representation = undefined,
        contentProtection = undefined,
        timescale = undefined,
        trackId = undefined;

    function createFtypBox(isoFile) {
        var ftyp = ISOBoxer.createBox('ftyp', isoFile);
        ftyp.major_brand = 'iso6';
        ftyp.minor_version = 1; // is an informative integer for the minor version of the major brand
        ftyp.compatible_brands = []; //is a list, to the end of the box, of brands isom, iso6 and msdh
        ftyp.compatible_brands[0] = 'isom'; // => decimal ASCII value for isom
        ftyp.compatible_brands[1] = 'iso6'; // => decimal ASCII value for iso6
        ftyp.compatible_brands[2] = 'msdh'; // => decimal ASCII value for msdh

        return ftyp;
    }

    function createMoovBox(isoFile) {

        // moov box
        var moov = ISOBoxer.createBox('moov', isoFile);

        // moov/mvhd
        createMvhdBox(moov);

        // moov/trak
        var trak = ISOBoxer.createBox('trak', moov);

        // moov/trak/tkhd
        createTkhdBox(trak);

        // moov/trak/mdia
        var mdia = ISOBoxer.createBox('mdia', trak);

        // moov/trak/mdia/mdhd
        createMdhdBox(mdia);

        // moov/trak/mdia/hdlr
        createHdlrBox(mdia);

        // moov/trak/mdia/minf
        var minf = ISOBoxer.createBox('minf', mdia);

        switch (adaptationSet.type) {
            case constants.VIDEO:
                // moov/trak/mdia/minf/vmhd
                createVmhdBox(minf);
                break;
            case constants.AUDIO:
                // moov/trak/mdia/minf/smhd
                createSmhdBox(minf);
                break;
            default:
                break;
        }

        // moov/trak/mdia/minf/dinf
        var dinf = ISOBoxer.createBox('dinf', minf);

        // moov/trak/mdia/minf/dinf/dref
        createDrefBox(dinf);

        // moov/trak/mdia/minf/stbl
        var stbl = ISOBoxer.createBox('stbl', minf);

        // Create empty stts, stsc, stco and stsz boxes
        // Use data field as for codem-isoboxer unknown boxes for setting fields value

        // moov/trak/mdia/minf/stbl/stts
        var stts = ISOBoxer.createFullBox('stts', stbl);
        stts._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

        // moov/trak/mdia/minf/stbl/stsc
        var stsc = ISOBoxer.createFullBox('stsc', stbl);
        stsc._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

        // moov/trak/mdia/minf/stbl/stco
        var stco = ISOBoxer.createFullBox('stco', stbl);
        stco._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

        // moov/trak/mdia/minf/stbl/stsz
        var stsz = ISOBoxer.createFullBox('stsz', stbl);
        stsz._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, sample_size = 0, sample_count = 0

        // moov/trak/mdia/minf/stbl/stsd
        createStsdBox(stbl);

        // moov/mvex
        var mvex = ISOBoxer.createBox('mvex', moov);

        // moov/mvex/trex
        createTrexBox(mvex);

        if (contentProtection && protectionController) {
            var supportedKS = protectionController.getSupportedKeySystemsFromContentProtection(contentProtection);
            createProtectionSystemSpecificHeaderBox(moov, supportedKS);
        }
    }

    function createMvhdBox(moov) {

        var mvhd = ISOBoxer.createFullBox('mvhd', moov);

        mvhd.version = 1; // version = 1  in order to have 64bits duration value

        mvhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
        mvhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
        mvhd.timescale = timescale; // the time-scale for the entire presentation => 10000000 for MSS
        mvhd.duration = Math.round(period.duration * timescale); // the length of the presentation (in the indicated timescale) =>  take duration of period
        mvhd.rate = 1.0; // 16.16 number, '1.0' = normal playback
        mvhd.volume = 1.0; // 8.8 number, '1.0' = full volume
        mvhd.reserved1 = 0;
        mvhd.reserved2 = [0x0, 0x0];
        mvhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
        0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
        0, 0, 16384];
        mvhd.pre_defined = [0, 0, 0, 0, 0, 0];
        mvhd.next_track_ID = trackId + 1; // indicates a value to use for the track ID of the next track to be added to this presentation

        return mvhd;
    }

    function createTkhdBox(trak) {

        var tkhd = ISOBoxer.createFullBox('tkhd', trak);

        tkhd.version = 1; // version = 1  in order to have 64bits duration value
        tkhd.flags = 0x1 | // Track_enabled (0x000001): Indicates that the track is enabled
        0x2 | // Track_in_movie (0x000002):  Indicates that the track is used in the presentation
        0x4; // Track_in_preview (0x000004):  Indicates that the track is used when previewing the presentation

        tkhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
        tkhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
        tkhd.track_ID = trackId; // uniquely identifies this track over the entire life-time of this presentation
        tkhd.reserved1 = 0;
        tkhd.duration = Math.round(period.duration * timescale); // the duration of this track (in the timescale indicated in the Movie Header Box) =>  take duration of period
        tkhd.reserved2 = [0x0, 0x0];
        tkhd.layer = 0; // specifies the front-to-back ordering of video tracks; tracks with lower numbers are closer to the viewer => 0 since only one video track
        tkhd.alternate_group = 0; // specifies a group or collection of tracks => ignore
        tkhd.volume = 1.0; // '1.0' = full volume
        tkhd.reserved3 = 0;
        tkhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
        0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
        0, 0, 16384];
        tkhd.width = representation.width; // visual presentation width
        tkhd.height = representation.height; // visual presentation height

        return tkhd;
    }

    function createMdhdBox(mdia) {

        var mdhd = ISOBoxer.createFullBox('mdhd', mdia);

        mdhd.version = 1; // version = 1  in order to have 64bits duration value

        mdhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
        mdhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
        mdhd.timescale = timescale; // the time-scale for the entire presentation
        mdhd.duration = Math.round(period.duration * timescale); // the duration of this media (in the scale of the timescale). If the duration cannot be determined then duration is set to all 1s.
        mdhd.language = adaptationSet.lang || 'und'; // declares the language code for this media (see getLanguageCode())
        mdhd.pre_defined = 0;

        return mdhd;
    }

    function createHdlrBox(mdia) {

        var hdlr = ISOBoxer.createFullBox('hdlr', mdia);

        hdlr.pre_defined = 0;
        switch (adaptationSet.type) {
            case constants.VIDEO:
                hdlr.handler_type = 'vide';
                break;
            case constants.AUDIO:
                hdlr.handler_type = 'soun';
                break;
            default:
                hdlr.handler_type = 'meta';
                break;
        }
        hdlr.name = representation.id;
        hdlr.reserved = [0, 0, 0];

        return hdlr;
    }

    function createVmhdBox(minf) {

        var vmhd = ISOBoxer.createFullBox('vmhd', minf);

        vmhd.flags = 1;

        vmhd.graphicsmode = 0; // specifies a composition mode for this video track, from the following enumerated set, which may be extended by derived specifications: copy = 0 copy over the existing image
        vmhd.opcolor = [0, 0, 0]; // is a set of 3 colour values (red, green, blue) available for use by graphics modes

        return vmhd;
    }

    function createSmhdBox(minf) {

        var smhd = ISOBoxer.createFullBox('smhd', minf);

        smhd.flags = 1;

        smhd.balance = 0; // is a fixed-point 8.8 number that places mono audio tracks in a stereo space; 0 is centre (the normal value); full left is -1.0 and full right is 1.0.
        smhd.reserved = 0;

        return smhd;
    }

    function createDrefBox(dinf) {

        var dref = ISOBoxer.createFullBox('dref', dinf);

        dref.entry_count = 1;
        dref.entries = [];

        var url = ISOBoxer.createFullBox('url ', dref, false);
        url.location = '';
        url.flags = 1;

        dref.entries.push(url);

        return dref;
    }

    function createStsdBox(stbl) {

        var stsd = ISOBoxer.createFullBox('stsd', stbl);

        stsd.entries = [];
        switch (adaptationSet.type) {
            case constants.VIDEO:
            case constants.AUDIO:
                stsd.entries.push(createSampleEntry(stsd));
                break;
            default:
                break;
        }

        stsd.entry_count = stsd.entries.length; // is an integer that counts the actual entries
        return stsd;
    }

    function createSampleEntry(stsd) {
        var codec = representation.codecs.substring(0, representation.codecs.indexOf('.'));

        switch (codec) {
            case 'avc1':
                return createAVCVisualSampleEntry(stsd, codec);
            case 'mp4a':
                return createMP4AudioSampleEntry(stsd, codec);
            default:
                throw {
                    name: 'Unsupported codec',
                    message: 'Unsupported codec',
                    data: {
                        codec: codec
                    }
                };
        }
    }

    function createAVCVisualSampleEntry(stsd, codec) {
        var avc1 = undefined;

        if (contentProtection) {
            avc1 = ISOBoxer.createBox('encv', stsd, false);
        } else {
            avc1 = ISOBoxer.createBox('avc1', stsd, false);
        }

        // SampleEntry fields
        avc1.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        avc1.data_reference_index = 1;

        // VisualSampleEntry fields
        avc1.pre_defined1 = 0;
        avc1.reserved2 = 0;
        avc1.pre_defined2 = [0, 0, 0];
        avc1.height = representation.height;
        avc1.width = representation.width;
        avc1.horizresolution = 72; // 72 dpi
        avc1.vertresolution = 72; // 72 dpi
        avc1.reserved3 = 0;
        avc1.frame_count = 1; // 1 compressed video frame per sample
        avc1.compressorname = [0x0A, 0x41, 0x56, 0x43, 0x20, 0x43, 0x6F, 0x64, // = 'AVC Coding';
        0x69, 0x6E, 0x67, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        avc1.depth = 0x0018; // 0x0018 – images are in colour with no alpha.
        avc1.pre_defined3 = 65535;
        avc1.config = createAVC1ConfigurationRecord();
        if (contentProtection) {
            // Create and add Protection Scheme Info Box
            var sinf = ISOBoxer.createBox('sinf', avc1);

            // Create and add Original Format Box => indicate codec type of the encrypted content
            createOriginalFormatBox(sinf, codec);

            // Create and add Scheme Type box
            createSchemeTypeBox(sinf);

            // Create and add Scheme Information Box
            createSchemeInformationBox(sinf);
        }

        return avc1;
    }

    function createAVC1ConfigurationRecord() {

        var avcC = null;
        var avcCLength = 15; // length = 15 by default (0 SPS and 0 PPS)

        // First get all SPS and PPS from codecPrivateData
        var sps = [];
        var pps = [];
        var AVCProfileIndication = 0;
        var AVCLevelIndication = 0;
        var profile_compatibility = 0;

        var nalus = representation.codecPrivateData.split('00000001').slice(1);
        var naluBytes = undefined,
            naluType = undefined;

        for (var _i = 0; _i < nalus.length; _i++) {
            naluBytes = hexStringtoBuffer(nalus[_i]);

            naluType = naluBytes[0] & 0x1F;

            switch (naluType) {
                case NALUTYPE_SPS:
                    sps.push(naluBytes);
                    avcCLength += naluBytes.length + 2; // 2 = sequenceParameterSetLength field length
                    break;
                case NALUTYPE_PPS:
                    pps.push(naluBytes);
                    avcCLength += naluBytes.length + 2; // 2 = pictureParameterSetLength field length
                    break;
                default:
                    break;
            }
        }

        // Get profile and level from SPS
        if (sps.length > 0) {
            AVCProfileIndication = sps[0][1];
            profile_compatibility = sps[0][2];
            AVCLevelIndication = sps[0][3];
        }

        // Generate avcC buffer
        avcC = new Uint8Array(avcCLength);

        var i = 0;
        // length
        avcC[i++] = (avcCLength & 0xFF000000) >> 24;
        avcC[i++] = (avcCLength & 0x00FF0000) >> 16;
        avcC[i++] = (avcCLength & 0x0000FF00) >> 8;
        avcC[i++] = avcCLength & 0x000000FF;
        avcC.set([0x61, 0x76, 0x63, 0x43], i); // type = 'avcC'
        i += 4;
        avcC[i++] = 1; // configurationVersion = 1
        avcC[i++] = AVCProfileIndication;
        avcC[i++] = profile_compatibility;
        avcC[i++] = AVCLevelIndication;
        avcC[i++] = 0xFF; // '11111' + lengthSizeMinusOne = 3
        avcC[i++] = 0xE0 | sps.length; // '111' + numOfSequenceParameterSets
        for (var n = 0; n < sps.length; n++) {
            avcC[i++] = (sps[n].length & 0xFF00) >> 8;
            avcC[i++] = sps[n].length & 0x00FF;
            avcC.set(sps[n], i);
            i += sps[n].length;
        }
        avcC[i++] = pps.length; // numOfPictureParameterSets
        for (var n = 0; n < pps.length; n++) {
            avcC[i++] = (pps[n].length & 0xFF00) >> 8;
            avcC[i++] = pps[n].length & 0x00FF;
            avcC.set(pps[n], i);
            i += pps[n].length;
        }

        return avcC;
    }

    function createMP4AudioSampleEntry(stsd, codec) {
        var mp4a = undefined;

        if (contentProtection) {
            mp4a = ISOBoxer.createBox('enca', stsd, false);
        } else {
            mp4a = ISOBoxer.createBox('mp4a', stsd, false);
        }

        // SampleEntry fields
        mp4a.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        mp4a.data_reference_index = 1;

        // AudioSampleEntry fields
        mp4a.reserved2 = [0x0, 0x0];
        mp4a.channelcount = representation.audioChannels;
        mp4a.samplesize = 16;
        mp4a.pre_defined = 0;
        mp4a.reserved_3 = 0;
        mp4a.samplerate = representation.audioSamplingRate << 16;

        mp4a.esds = createMPEG4AACESDescriptor();

        if (contentProtection) {
            // Create and add Protection Scheme Info Box
            var sinf = ISOBoxer.createBox('sinf', mp4a);

            // Create and add Original Format Box => indicate codec type of the encrypted content
            createOriginalFormatBox(sinf, codec);

            // Create and add Scheme Type box
            createSchemeTypeBox(sinf);

            // Create and add Scheme Information Box
            createSchemeInformationBox(sinf);
        }

        return mp4a;
    }

    function createMPEG4AACESDescriptor() {

        // AudioSpecificConfig (see ISO/IEC 14496-3, subpart 1) => corresponds to hex bytes contained in 'codecPrivateData' field
        var audioSpecificConfig = hexStringtoBuffer(representation.codecPrivateData);

        // ESDS length = esds box header length (= 12) +
        //               ES_Descriptor header length (= 5) +
        //               DecoderConfigDescriptor header length (= 15) +
        //               decoderSpecificInfo header length (= 2) +
        //               AudioSpecificConfig length (= codecPrivateData length)
        var esdsLength = 34 + audioSpecificConfig.length;
        var esds = new Uint8Array(esdsLength);

        var i = 0;
        // esds box
        esds[i++] = (esdsLength & 0xFF000000) >> 24; // esds box length
        esds[i++] = (esdsLength & 0x00FF0000) >> 16; // ''
        esds[i++] = (esdsLength & 0x0000FF00) >> 8; // ''
        esds[i++] = esdsLength & 0x000000FF; // ''
        esds.set([0x65, 0x73, 0x64, 0x73], i); // type = 'esds'
        i += 4;
        esds.set([0, 0, 0, 0], i); // version = 0, flags = 0
        i += 4;
        // ES_Descriptor (see ISO/IEC 14496-1 (Systems))
        esds[i++] = 0x03; // tag = 0x03 (ES_DescrTag)
        esds[i++] = 20 + audioSpecificConfig.length; // size
        esds[i++] = (trackId & 0xFF00) >> 8; // ES_ID = track_id
        esds[i++] = trackId & 0x00FF; // ''
        esds[i++] = 0; // flags and streamPriority

        // DecoderConfigDescriptor (see ISO/IEC 14496-1 (Systems))
        esds[i++] = 0x04; // tag = 0x04 (DecoderConfigDescrTag)
        esds[i++] = 15 + audioSpecificConfig.length; // size
        esds[i++] = 0x40; // objectTypeIndication = 0x40 (MPEG-4 AAC)
        esds[i] = 0x05 << 2; // streamType = 0x05 (Audiostream)
        esds[i] |= 0 << 1; // upStream = 0
        esds[i++] |= 1; // reserved = 1
        esds[i++] = 0xFF; // buffersizeDB = undefined
        esds[i++] = 0xFF; // ''
        esds[i++] = 0xFF; // ''
        esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // maxBitrate
        esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
        esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
        esds[i++] = representation.bandwidth & 0x000000FF; // ''
        esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // avgbitrate
        esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
        esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
        esds[i++] = representation.bandwidth & 0x000000FF; // ''

        // DecoderSpecificInfo (see ISO/IEC 14496-1 (Systems))
        esds[i++] = 0x05; // tag = 0x05 (DecSpecificInfoTag)
        esds[i++] = audioSpecificConfig.length; // size
        esds.set(audioSpecificConfig, i); // AudioSpecificConfig bytes

        return esds;
    }

    function createOriginalFormatBox(sinf, codec) {
        var frma = ISOBoxer.createBox('frma', sinf);
        frma.data_format = stringToCharCode(codec);
    }

    function createSchemeTypeBox(sinf) {
        var schm = ISOBoxer.createFullBox('schm', sinf);

        schm.flags = 0;
        schm.version = 0;
        schm.scheme_type = 0x63656E63; // 'cenc' => common encryption
        schm.scheme_version = 0x00010000; // version set to 0x00010000 (Major version 1, Minor version 0)
    }

    function createSchemeInformationBox(sinf) {
        var schi = ISOBoxer.createBox('schi', sinf);

        // Create and add Track Encryption Box
        createTrackEncryptionBox(schi);
    }

    function createProtectionSystemSpecificHeaderBox(moov, keySystems) {
        var pssh_bytes = undefined;
        var pssh = undefined;
        var i = undefined;
        var parsedBuffer = undefined;

        for (i = 0; i < keySystems.length; i += 1) {
            pssh_bytes = keySystems[i].initData;
            parsedBuffer = ISOBoxer.parseBuffer(pssh_bytes);
            pssh = parsedBuffer.fetch('pssh');
            if (pssh) {
                ISOBoxer.Utils.appendBox(moov, pssh);
            }
        }
    }

    function createTrackEncryptionBox(schi) {
        var tenc = ISOBoxer.createFullBox('tenc', schi);

        tenc.flags = 0;
        tenc.version = 0;

        tenc.default_IsEncrypted = 0x1;
        tenc.default_IV_size = 8;
        tenc.default_KID = contentProtection && contentProtection.length > 0 && contentProtection[0]['cenc:default_KID'] ? contentProtection[0]['cenc:default_KID'] : [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
    }

    function createTrexBox(moov) {

        var trex = ISOBoxer.createFullBox('trex', moov);

        trex.track_ID = trackId;
        trex.default_sample_description_index = 1;
        trex.default_sample_duration = 0;
        trex.default_sample_size = 0;
        trex.default_sample_flags = 0;

        return trex;
    }

    function hexStringtoBuffer(str) {
        var buf = new Uint8Array(str.length / 2);
        var i = undefined;

        for (i = 0; i < str.length / 2; i += 1) {
            buf[i] = parseInt('' + str[i * 2] + str[i * 2 + 1], 16);
        }
        return buf;
    }

    function stringToCharCode(str) {
        var code = 0;
        var i = undefined;

        for (i = 0; i < str.length; i += 1) {
            code |= str.charCodeAt(i) << (str.length - i - 1) * 8;
        }
        return code;
    }

    function generateMoov(rep) {
        if (!rep || !rep.adaptation) {
            return;
        }

        var isoFile = undefined,
            arrayBuffer = undefined;

        representation = rep;
        adaptationSet = representation.adaptation;

        period = adaptationSet.period;
        trackId = adaptationSet.index + 1;
        contentProtection = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].ContentProtection;

        timescale = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].SegmentTemplate.timescale;

        isoFile = ISOBoxer.createFile();
        createFtypBox(isoFile);
        createMoovBox(isoFile);

        arrayBuffer = isoFile.write();

        return arrayBuffer;
    }

    instance = {
        generateMoov: generateMoov
    };

    return instance;
}

MssFragmentMoovProcessor.__dashjs_factory_name = 'MssFragmentMoovProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoovProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],6:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

var _MssFragmentMoovProcessor = _dereq_('./MssFragmentMoovProcessor');

var _MssFragmentMoovProcessor2 = _interopRequireDefault(_MssFragmentMoovProcessor);

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

// Add specific box processors not provided by codem-isoboxer library

function arrayEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (element, index) {
        return element === arr2[index];
    });
}

function saioProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('entry_count', 'uint', 32);
    this._procFieldArray('offset', this.entry_count, 'uint', this.version === 1 ? 64 : 32);
}

function saizProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('default_sample_info_size', 'uint', 8);
    this._procField('sample_count', 'uint', 32);
    if (this.default_sample_info_size === 0) {
        this._procFieldArray('sample_info_size', this.sample_count, 'uint', 8);
    }
}

function sencProcessor() {
    this._procFullBox();
    this._procField('sample_count', 'uint', 32);
    if (this.flags & 1) {
        this._procField('IV_size', 'uint', 8);
    }
    this._procEntries('entry', this.sample_count, function (entry) {
        this._procEntryField(entry, 'InitializationVector', 'data', 8);
        if (this.flags & 2) {
            this._procEntryField(entry, 'NumberOfEntries', 'uint', 16);
            this._procSubEntries(entry, 'clearAndCryptedData', entry.NumberOfEntries, function (clearAndCryptedData) {
                this._procEntryField(clearAndCryptedData, 'BytesOfClearData', 'uint', 16);
                this._procEntryField(clearAndCryptedData, 'BytesOfEncryptedData', 'uint', 32);
            });
        }
    });
}

function uuidProcessor() {
    var tfxdUserType = [0x6D, 0x1D, 0x9B, 0x05, 0x42, 0xD5, 0x44, 0xE6, 0x80, 0xE2, 0x14, 0x1D, 0xAF, 0xF7, 0x57, 0xB2];
    var tfrfUserType = [0xD4, 0x80, 0x7E, 0xF2, 0xCA, 0x39, 0x46, 0x95, 0x8E, 0x54, 0x26, 0xCB, 0x9E, 0x46, 0xA7, 0x9F];
    var sepiffUserType = [0xA2, 0x39, 0x4F, 0x52, 0x5A, 0x9B, 0x4f, 0x14, 0xA2, 0x44, 0x6C, 0x42, 0x7C, 0x64, 0x8D, 0xF4];

    if (arrayEqual(this.usertype, tfxdUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfxd';
        }
        this._procField('fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
        this._procField('fragment_duration', 'uint', this.version === 1 ? 64 : 32);
    }

    if (arrayEqual(this.usertype, tfrfUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfrf';
        }
        this._procField('fragment_count', 'uint', 8);
        this._procEntries('entry', this.fragment_count, function (entry) {
            this._procEntryField(entry, 'fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
            this._procEntryField(entry, 'fragment_duration', 'uint', this.version === 1 ? 64 : 32);
        });
    }

    if (arrayEqual(this.usertype, sepiffUserType)) {
        if (this._parsing) {
            this.type = 'sepiff';
        }
        sencProcessor.call(this);
    }
}

function MssFragmentProcessor(config) {

    config = config || {};
    var context = this.context;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var eventBus = config.eventBus;
    var protectionController = config.protectionController;
    var ISOBoxer = config.ISOBoxer;
    var log = config.log;
    var instance = undefined;

    function setup() {
        ISOBoxer.addBoxProcessor('uuid', uuidProcessor);
        ISOBoxer.addBoxProcessor('saio', saioProcessor);
        ISOBoxer.addBoxProcessor('saiz', saizProcessor);
        ISOBoxer.addBoxProcessor('senc', sencProcessor);
    }

    function generateMoov(rep) {
        var mssFragmentMoovProcessor = (0, _MssFragmentMoovProcessor2['default'])(context).create({ protectionController: protectionController, constants: config.constants, ISOBoxer: config.ISOBoxer });
        return mssFragmentMoovProcessor.generateMoov(rep);
    }

    function processFragment(e, sp) {
        if (!e || !e.request || !e.response) {
            throw new Error('e parameter is missing or malformed');
        }

        var request = e.request;

        if (request.type === 'MediaSegment') {

            // it's a MediaSegment, let's convert fragment
            var mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
                metricsModel: metricsModel,
                playbackController: playbackController,
                ISOBoxer: ISOBoxer,
                log: log,
                errHandler: config.errHandler
            });
            mssFragmentMoofProcessor.convertFragment(e, sp);
        } else if (request.type === 'FragmentInfoSegment') {

            // it's a FragmentInfo, ask relative fragment info controller to handle it
            eventBus.trigger(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, {
                fragmentInfo: e,
                streamProcessor: sp
            });

            // Change the sender value to stop event to be propagated (fragment info must not be added to buffer)
            e.sender = null;
        }
    }

    instance = {
        generateMoov: generateMoov,
        processFragment: processFragment
    };

    setup();

    return instance;
}

MssFragmentProcessor.__dashjs_factory_name = 'MssFragmentProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./MssEvents":2,"./MssFragmentMoofProcessor":4,"./MssFragmentMoovProcessor":5}],7:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _streamingVoDataChunk = _dereq_('../streaming/vo/DataChunk');

var _streamingVoDataChunk2 = _interopRequireDefault(_streamingVoDataChunk);

var _streamingVoFragmentRequest = _dereq_('../streaming/vo/FragmentRequest');

var _streamingVoFragmentRequest2 = _interopRequireDefault(_streamingVoFragmentRequest);

var _MssFragmentInfoController = _dereq_('./MssFragmentInfoController');

var _MssFragmentInfoController2 = _interopRequireDefault(_MssFragmentInfoController);

var _MssFragmentProcessor = _dereq_('./MssFragmentProcessor');

var _MssFragmentProcessor2 = _interopRequireDefault(_MssFragmentProcessor);

var _parserMssParser = _dereq_('./parser/MssParser');

var _parserMssParser2 = _interopRequireDefault(_parserMssParser);

function MssHandler(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus;
    var events = config.events;
    var constants = config.constants;
    var initSegmentType = config.initSegmentType;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var protectionController = config.protectionController;
    var mssFragmentProcessor = (0, _MssFragmentProcessor2['default'])(context).create({
        metricsModel: metricsModel,
        playbackController: playbackController,
        protectionController: protectionController,
        eventBus: eventBus,
        constants: constants,
        ISOBoxer: config.ISOBoxer,
        log: config.log,
        errHandler: config.errHandler
    });
    var mssParser = undefined;

    var instance = undefined;

    function setup() {}

    function onInitializationRequested(e) {
        var streamProcessor = e.sender.getStreamProcessor();
        var request = new _streamingVoFragmentRequest2['default']();
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();
        var period = undefined,
            presentationStartTime = undefined;

        period = representation.adaptation.period;

        request.mediaType = representation.adaptation.type;
        request.type = initSegmentType;
        request.range = representation.range;
        presentationStartTime = period.start;
        //request.availabilityStartTime = timelineConverter.calcAvailabilityStartTimeFromPresentationTime(presentationStartTime, representation.adaptation.period.mpd, isDynamic);
        //request.availabilityEndTime = timelineConverter.calcAvailabilityEndTimeFromPresentationTime(presentationStartTime + period.duration, period.mpd, isDynamic);
        request.quality = representation.index;
        request.mediaInfo = streamProcessor.getMediaInfo();
        request.representationId = representation.id;

        var chunk = createDataChunk(request, streamProcessor.getStreamInfo().id, e.type !== events.FRAGMENT_LOADING_PROGRESS);

        // Generate initialization segment (moov)
        chunk.bytes = mssFragmentProcessor.generateMoov(representation);

        eventBus.trigger(events.INIT_FRAGMENT_LOADED, {
            chunk: chunk,
            fragmentModel: streamProcessor.getFragmentModel()
        });

        // Change the sender value to stop event to be propagated
        e.sender = null;
    }

    function createDataChunk(request, streamId, endFragment) {
        var chunk = new _streamingVoDataChunk2['default']();

        chunk.streamId = streamId;
        chunk.mediaInfo = request.mediaInfo;
        chunk.segmentType = request.type;
        chunk.start = request.startTime;
        chunk.duration = request.duration;
        chunk.end = chunk.start + chunk.duration;
        chunk.index = request.index;
        chunk.quality = request.quality;
        chunk.representationId = request.representationId;
        chunk.endFragment = endFragment;

        return chunk;
    }

    function onSegmentMediaLoaded(e) {
        if (e.error) {
            return;
        }
        // Process moof to transcode it from MSS to DASH
        var streamProcessor = e.sender.getStreamProcessor();
        mssFragmentProcessor.processFragment(e, streamProcessor);
    }

    function onPlaybackSeekAsked() {
        if (playbackController.getIsDynamic() && playbackController.getTime() !== 0) {

            //create fragment info controllers for each stream processors of active stream (only for audio, video or fragmentedText)
            var streamController = playbackController.getStreamController();
            if (streamController) {
                var processors = streamController.getActiveStreamProcessors();
                processors.forEach(function (processor) {
                    if (processor.getType() === constants.VIDEO || processor.getType() === constants.AUDIO || processor.getType() === constants.FRAGMENTED_TEXT) {

                        // check that there is no fragment info controller registered to processor
                        var i = undefined;
                        var alreadyRegistered = false;
                        var externalControllers = processor.getExternalControllers();
                        for (i = 0; i < externalControllers.length; i++) {
                            if (externalControllers[i].controllerType && externalControllers[i].controllerType === 'MssFragmentInfoController') {
                                alreadyRegistered = true;
                            }
                        }

                        if (!alreadyRegistered) {
                            var fragmentInfoController = (0, _MssFragmentInfoController2['default'])(context).create({
                                streamProcessor: processor,
                                eventBus: eventBus,
                                metricsModel: metricsModel,
                                playbackController: playbackController,
                                ISOBoxer: config.ISOBoxer,
                                log: config.log
                            });
                            fragmentInfoController.initialize();
                            fragmentInfoController.start();
                        }
                    }
                });
            }
        }
    }

    function onTTMLPreProcess(ttmlSubtitles) {
        if (!ttmlSubtitles || !ttmlSubtitles.data) {
            return;
        }

        while (ttmlSubtitles.data.indexOf('http://www.w3.org/2006/10/ttaf1') !== -1) {
            ttmlSubtitles.data = ttmlSubtitles.data.replace('http://www.w3.org/2006/10/ttaf1', 'http://www.w3.org/ns/ttml');
        }
    }

    function registerEvents() {
        eventBus.on(events.INIT_REQUESTED, onInitializationRequested, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.TTML_TO_PARSE, onTTMLPreProcess, instance);
    }

    function reset() {
        eventBus.off(events.INIT_REQUESTED, onInitializationRequested, this);
        eventBus.off(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, this);
        eventBus.off(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, this);
        eventBus.off(events.TTML_TO_PARSE, onTTMLPreProcess, this);
    }

    function createMssParser() {
        mssParser = (0, _parserMssParser2['default'])(context).create(config);
        return mssParser;
    }

    instance = {
        reset: reset,
        createMssParser: createMssParser,
        registerEvents: registerEvents
    };

    setup();

    return instance;
}

MssHandler.__dashjs_factory_name = 'MssHandler';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssHandler);
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/vo/DataChunk":10,"../streaming/vo/FragmentRequest":11,"./MssFragmentInfoController":3,"./MssFragmentProcessor":6,"./parser/MssParser":9}],8:[function(_dereq_,module,exports){
(function (global){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssHandler = _dereq_('./MssHandler');

var _MssHandler2 = _interopRequireDefault(_MssHandler);

// Shove both of these into the global scope
var context = typeof window !== 'undefined' && window || global;

var dashjs = context.dashjs;
if (!dashjs) {
  dashjs = context.dashjs = {};
}

dashjs.MssHandler = _MssHandler2['default'];

exports['default'] = dashjs;
exports.MssHandler = _MssHandler2['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MssHandler":7}],9:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module MssParser
 * @param {Object} config object
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MssParser(config) {
    config = config || {};
    var BASE64 = config.BASE64;
    var log = config.log;
    var constants = config.constants;

    var DEFAULT_TIME_SCALE = 10000000.0;
    var SUPPORTED_CODECS = ['AAC', 'AACL', 'AVC1', 'H264', 'TTML', 'DFXP'];
    // MPEG-DASH Role and accessibility mapping according to ETSI TS 103 285 v1.1.1 (section 7.1.2)
    var ROLE = {
        'SUBT': 'alternate',
        'CAPT': 'alternate', // 'CAPT' is commonly equivalent to 'SUBT'
        'DESC': 'main'
    };
    var ACCESSIBILITY = {
        'DESC': '2'
    };
    var samplingFrequencyIndex = {
        96000: 0x0,
        88200: 0x1,
        64000: 0x2,
        48000: 0x3,
        44100: 0x4,
        32000: 0x5,
        24000: 0x6,
        22050: 0x7,
        16000: 0x8,
        12000: 0x9,
        11025: 0xA,
        8000: 0xB,
        7350: 0xC
    };
    var mimeTypeMap = {
        'video': 'video/mp4',
        'audio': 'audio/mp4',
        'text': 'application/mp4'
    };

    var instance = undefined,
        mediaPlayerModel = undefined;

    function setup() {
        mediaPlayerModel = config.mediaPlayerModel;
    }

    function mapPeriod(smoothStreamingMedia, timescale) {
        var period = {};
        var streams = undefined,
            adaptation = undefined;

        // For each StreamIndex node, create an AdaptationSet element
        period.AdaptationSet_asArray = [];
        streams = smoothStreamingMedia.getElementsByTagName('StreamIndex');
        for (var i = 0; i < streams.length; i++) {
            adaptation = mapAdaptationSet(streams[i], timescale);
            if (adaptation !== null) {
                period.AdaptationSet_asArray.push(adaptation);
            }
        }

        if (period.AdaptationSet_asArray.length > 0) {
            period.AdaptationSet = period.AdaptationSet_asArray.length > 1 ? period.AdaptationSet_asArray : period.AdaptationSet_asArray[0];
        }

        return period;
    }

    function mapAdaptationSet(streamIndex, timescale) {

        var adaptationSet = {};
        var representations = [];
        var segmentTemplate = {};
        var qualityLevels = undefined,
            representation = undefined,
            segments = undefined,
            i = undefined;

        adaptationSet.id = streamIndex.getAttribute('Name') ? streamIndex.getAttribute('Name') : streamIndex.getAttribute('Type');
        adaptationSet.contentType = streamIndex.getAttribute('Type');
        adaptationSet.lang = streamIndex.getAttribute('Language') || 'und';
        adaptationSet.mimeType = mimeTypeMap[adaptationSet.contentType];
        adaptationSet.subType = streamIndex.getAttribute('Subtype');
        adaptationSet.maxWidth = streamIndex.getAttribute('MaxWidth');
        adaptationSet.maxHeight = streamIndex.getAttribute('MaxHeight');

        // Map subTypes to MPEG-DASH AdaptationSet role and accessibility (see ETSI TS 103 285 v1.1.1, section 7.1.2)
        if (adaptationSet.subType) {
            if (ROLE[adaptationSet.subType]) {
                var role = {
                    schemeIdUri: 'urn:mpeg:dash:role:2011',
                    value: ROLE[adaptationSet.subType]
                };
                adaptationSet.Role = role;
                adaptationSet.Role_asArray = [role];
            }
            if (ACCESSIBILITY[adaptationSet.subType]) {
                var accessibility = {
                    schemeIdUri: 'urn:tva:metadata:cs:AudioPurposeCS:2007',
                    value: ACCESSIBILITY[adaptationSet.subType]
                };
                adaptationSet.Accessibility = accessibility;
                adaptationSet.Accessibility_asArray = [accessibility];
            }
        }

        // Create a SegmentTemplate with a SegmentTimeline
        segmentTemplate = mapSegmentTemplate(streamIndex, timescale);

        qualityLevels = streamIndex.getElementsByTagName('QualityLevel');
        // For each QualityLevel node, create a Representation element
        for (i = 0; i < qualityLevels.length; i++) {
            // Propagate BaseURL and mimeType
            qualityLevels[i].BaseURL = adaptationSet.BaseURL;
            qualityLevels[i].mimeType = adaptationSet.mimeType;

            // Set quality level id
            qualityLevels[i].Id = adaptationSet.id + '_' + qualityLevels[i].getAttribute('Index');

            // Map Representation to QualityLevel
            representation = mapRepresentation(qualityLevels[i], streamIndex);

            if (representation !== null) {
                // Copy SegmentTemplate into Representation
                representation.SegmentTemplate = segmentTemplate;

                representations.push(representation);
            }
        }

        if (representations.length === 0) {
            return null;
        }

        adaptationSet.Representation = representations.length > 1 ? representations : representations[0];
        adaptationSet.Representation_asArray = representations;

        // Set SegmentTemplate
        adaptationSet.SegmentTemplate = segmentTemplate;

        segments = segmentTemplate.SegmentTimeline.S_asArray;

        return adaptationSet;
    }

    function mapRepresentation(qualityLevel, streamIndex) {

        var representation = {};
        var fourCCValue = null;
        var type = streamIndex.getAttribute('Type');

        representation.id = qualityLevel.Id;
        representation.bandwidth = parseInt(qualityLevel.getAttribute('Bitrate'), 10);
        representation.mimeType = qualityLevel.mimeType;
        representation.width = parseInt(qualityLevel.getAttribute('MaxWidth'), 10);
        representation.height = parseInt(qualityLevel.getAttribute('MaxHeight'), 10);

        fourCCValue = qualityLevel.getAttribute('FourCC');

        // If FourCC not defined at QualityLevel level, then get it from StreamIndex level
        if (fourCCValue === null || fourCCValue === '') {
            fourCCValue = streamIndex.getAttribute('FourCC');
        }

        // If still not defined (optionnal for audio stream, see https://msdn.microsoft.com/en-us/library/ff728116%28v=vs.95%29.aspx),
        // then we consider the stream is an audio AAC stream
        if (fourCCValue === null || fourCCValue === '') {
            if (type === 'audio') {
                fourCCValue = 'AAC';
            } else if (type === 'video') {
                log('[MssParser] FourCC is not defined whereas it is required for a QualityLevel element for a StreamIndex of type "video"');
                return null;
            }
        }

        // Check if codec is supported
        if (SUPPORTED_CODECS.indexOf(fourCCValue.toUpperCase()) === -1) {
            // Do not send warning
            //this.errHandler.sendWarning(MediaPlayer.dependencies.ErrorHandler.prototype.MEDIA_ERR_CODEC_UNSUPPORTED, 'Codec not supported', {codec: fourCCValue});
            log('[MssParser] Codec not supported: ' + fourCCValue);
            return null;
        }

        // Get codecs value according to FourCC field
        if (fourCCValue === 'H264' || fourCCValue === 'AVC1') {
            representation.codecs = getH264Codec(qualityLevel);
        } else if (fourCCValue.indexOf('AAC') >= 0) {
            representation.codecs = getAACCodec(qualityLevel, fourCCValue);
            representation.audioSamplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
            representation.audioChannels = parseInt(qualityLevel.getAttribute('Channels'), 10);
        } else if (fourCCValue.indexOf('TTML') || fourCCValue.indexOf('DFXP')) {
            representation.codecs = constants.STPP;
        }

        representation.codecPrivateData = '' + qualityLevel.getAttribute('CodecPrivateData');
        representation.BaseURL = qualityLevel.BaseURL;

        return representation;
    }

    function getH264Codec(qualityLevel) {
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var nalHeader = undefined,
            avcoti = undefined;

        // Extract from the CodecPrivateData field the hexadecimal representation of the following
        // three bytes in the sequence parameter set NAL unit.
        // => Find the SPS nal header
        nalHeader = /00000001[0-9]7/.exec(codecPrivateData);
        // => Find the 6 characters after the SPS nalHeader (if it exists)
        avcoti = nalHeader && nalHeader[0] ? codecPrivateData.substr(codecPrivateData.indexOf(nalHeader[0]) + 10, 6) : undefined;

        return 'avc1.' + avcoti;
    }

    function getAACCodec(qualityLevel, fourCCValue) {
        var objectType = 0;
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var samplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
        var codecPrivateDataHex = undefined,
            arr16 = undefined,
            indexFreq = undefined,
            extensionSamplingFrequencyIndex = undefined;

        //chrome problem, in implicit AAC HE definition, so when AACH is detected in FourCC
        //set objectType to 5 => strange, it should be 2
        if (fourCCValue === 'AACH') {
            objectType = 0x05;
        }
        //if codecPrivateData is empty, build it :
        if (codecPrivateData === undefined || codecPrivateData === '') {
            objectType = 0x02; //AAC Main Low Complexity => object Type = 2
            indexFreq = samplingFrequencyIndex[samplingRate];
            if (fourCCValue === 'AACH') {
                // 4 bytes :     XXXXX         XXXX          XXXX             XXXX                  XXXXX      XXX   XXXXXXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'Extens Sampl Freq'  'ObjectType'  'GAS' 'alignment = 0'
                objectType = 0x05; // High Efficiency AAC Profile = object Type = 5 SBR
                codecPrivateData = new Uint8Array(4);
                extensionSamplingFrequencyIndex = samplingFrequencyIndex[samplingRate * 2]; // in HE AAC Extension Sampling frequence
                // equals to SamplingRate*2
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | qualityLevel.Channels << 3 | extensionSamplingFrequencyIndex >> 1;
                codecPrivateData[2] = extensionSamplingFrequencyIndex << 7 | 0x02 << 2; // origin object type equals to 2 => AAC Main Low Complexity
                codecPrivateData[3] = 0x0; //alignment bits

                arr16 = new Uint16Array(2);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                arr16[1] = (codecPrivateData[2] << 8) + codecPrivateData[3];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
                codecPrivateDataHex = arr16[0].toString(16) + arr16[1].toString(16);
            } else {
                // 2 bytes :     XXXXX         XXXX          XXXX              XXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'GAS = 000'
                codecPrivateData = new Uint8Array(2);
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | parseInt(qualityLevel.getAttribute('Channels'), 10) << 3;
                // put the 2 bytes in an 16 bits array
                arr16 = new Uint16Array(1);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
            }

            codecPrivateData = '' + codecPrivateDataHex;
            codecPrivateData = codecPrivateData.toUpperCase();
            qualityLevel.setAttribute('CodecPrivateData', codecPrivateData);
        } else if (objectType === 0) {
            objectType = (parseInt(codecPrivateData.substr(0, 2), 16) & 0xF8) >> 3;
        }

        return 'mp4a.40.' + objectType;
    }

    function mapSegmentTemplate(streamIndex, timescale) {

        var segmentTemplate = {};
        var mediaUrl = undefined,
            streamIndexTimeScale = undefined;

        mediaUrl = streamIndex.getAttribute('Url').replace('{bitrate}', '$Bandwidth$');
        mediaUrl = mediaUrl.replace('{start time}', '$Time$');

        streamIndexTimeScale = streamIndex.getAttribute('TimeScale');
        streamIndexTimeScale = streamIndexTimeScale ? parseFloat(streamIndexTimeScale) : timescale;

        segmentTemplate.media = mediaUrl;
        segmentTemplate.timescale = streamIndexTimeScale;

        segmentTemplate.SegmentTimeline = mapSegmentTimeline(streamIndex, segmentTemplate.timescale);

        return segmentTemplate;
    }

    function mapSegmentTimeline(streamIndex, timescale) {

        var segmentTimeline = {};
        var chunks = streamIndex.getElementsByTagName('c');
        var segments = [];
        var segment = undefined;
        var prevSegment = undefined;
        var tManifest = undefined;
        var i = undefined,
            j = undefined,
            r = undefined;
        var duration = 0;

        for (i = 0; i < chunks.length; i++) {
            segment = {};

            // Get time 't' attribute value
            tManifest = chunks[i].getAttribute('t');

            // => segment.tManifest = original timestamp value as a string (for constructing the fragment request url, see DashHandler)
            // => segment.t = number value of timestamp (maybe rounded value, but only for 0.1 microsecond)
            segment.tManifest = parseFloat(tManifest);
            segment.t = parseFloat(tManifest);

            // Get duration 'd' attribute value
            segment.d = parseFloat(chunks[i].getAttribute('d'));

            // If 't' not defined for first segment then t=0
            if (i === 0 && !segment.t) {
                segment.t = 0;
            }

            if (i > 0) {
                prevSegment = segments[segments.length - 1];
                // Update previous segment duration if not defined
                if (!prevSegment.d) {
                    if (prevSegment.tManifest) {
                        prevSegment.d = parseFloat(tManifest) - parseFloat(prevSegment.tManifest);
                    } else {
                        prevSegment.d = segment.t - prevSegment.t;
                    }
                }
                // Set segment absolute timestamp if not set in manifest
                if (!segment.t) {
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                        segment.t = parseFloat(segment.tManifest);
                    } else {
                        segment.t = prevSegment.t + prevSegment.d;
                    }
                }
            }

            duration += segment.d;

            // Create new segment
            segments.push(segment);

            // Support for 'r' attribute (i.e. "repeat" as in MPEG-DASH)
            r = parseFloat(chunks[i].getAttribute('r'));
            if (r) {

                for (j = 0; j < r - 1; j++) {
                    prevSegment = segments[segments.length - 1];
                    segment = {};
                    segment.t = prevSegment.t + prevSegment.d;
                    segment.d = prevSegment.d;
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                    }
                    duration += segment.d;
                    segments.push(segment);
                }
            }
        }

        segmentTimeline.S = segments;
        segmentTimeline.S_asArray = segments;
        segmentTimeline.duration = duration / timescale;

        return segmentTimeline;
    }

    function getKIDFromProtectionHeader(protectionHeader) {
        var prHeader = undefined,
            wrmHeader = undefined,
            xmlReader = undefined,
            KID = undefined;

        // Get PlayReady header as byte array (base64 decoded)
        prHeader = BASE64.decodeArray(protectionHeader.firstChild.data);

        // Get Right Management header (WRMHEADER) from PlayReady header
        wrmHeader = getWRMHeaderFromPRHeader(prHeader);

        // Convert from multi-byte to unicode
        wrmHeader = new Uint16Array(wrmHeader.buffer);

        // Convert to string
        wrmHeader = String.fromCharCode.apply(null, wrmHeader);

        // Parse <WRMHeader> to get KID field value
        xmlReader = new DOMParser().parseFromString(wrmHeader, 'application/xml');
        KID = xmlReader.querySelector('KID').textContent;

        // Get KID (base64 decoded) as byte array
        KID = BASE64.decodeArray(KID);

        // Convert UUID from little-endian to big-endian
        convertUuidEndianness(KID);

        return KID;
    }

    function getWRMHeaderFromPRHeader(prHeader) {
        var length = undefined,
            recordCount = undefined,
            recordType = undefined,
            recordLength = undefined,
            recordValue = undefined;
        var i = 0;

        // Parse PlayReady header

        // Length - 32 bits (LE format)
        length = (prHeader[i + 3] << 24) + (prHeader[i + 2] << 16) + (prHeader[i + 1] << 8) + prHeader[i];
        i += 4;

        // Record count - 16 bits (LE format)
        recordCount = (prHeader[i + 1] << 8) + prHeader[i];
        i += 2;

        // Parse records
        while (i < prHeader.length) {
            // Record type - 16 bits (LE format)
            recordType = (prHeader[i + 1] << 8) + prHeader[i];
            i += 2;

            // Check if Rights Management header (record type = 0x01)
            if (recordType === 0x01) {

                // Record length - 16 bits (LE format)
                recordLength = (prHeader[i + 1] << 8) + prHeader[i];
                i += 2;

                // Record value => contains <WRMHEADER>
                recordValue = new Uint8Array(recordLength);
                recordValue.set(prHeader.subarray(i, i + recordLength));
                return recordValue;
            }
        }

        return null;
    }

    function convertUuidEndianness(uuid) {
        swapBytes(uuid, 0, 3);
        swapBytes(uuid, 1, 2);
        swapBytes(uuid, 4, 5);
        swapBytes(uuid, 6, 7);
    }

    function swapBytes(bytes, pos1, pos2) {
        var temp = bytes[pos1];
        bytes[pos1] = bytes[pos2];
        bytes[pos2] = temp;
    }

    function createPRContentProtection(protectionHeader) {
        var pro = {
            __text: protectionHeader.firstChild.data,
            __prefix: 'mspr'
        };
        return {
            schemeIdUri: 'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95',
            value: 'com.microsoft.playready',
            pro: pro,
            pro_asArray: pro
        };
    }

    function createWidevineContentProtection(protectionHeader, KID) {
        // Create Widevine CENC header (Protocol Buffer) with KID value
        var wvCencHeader = new Uint8Array(2 + KID.length);
        wvCencHeader[0] = 0x12;
        wvCencHeader[1] = 0x10;
        wvCencHeader.set(KID, 2);

        // Create a pssh box
        var length = 12 /* box length, type, version and flags */ + 16 /* SystemID */ + 4 /* data length */ + wvCencHeader.length;
        var pssh = new Uint8Array(length);
        var i = 0;

        // Set box length value
        pssh[i++] = (length & 0xFF000000) >> 24;
        pssh[i++] = (length & 0x00FF0000) >> 16;
        pssh[i++] = (length & 0x0000FF00) >> 8;
        pssh[i++] = length & 0x000000FF;

        // Set type ('pssh'), version (0) and flags (0)
        pssh.set([0x70, 0x73, 0x73, 0x68, 0x00, 0x00, 0x00, 0x00], i);
        i += 8;

        // Set SystemID ('edef8ba9-79d6-4ace-a3c8-27dcd51d21ed')
        pssh.set([0xed, 0xef, 0x8b, 0xa9, 0x79, 0xd6, 0x4a, 0xce, 0xa3, 0xc8, 0x27, 0xdc, 0xd5, 0x1d, 0x21, 0xed], i);
        i += 16;

        // Set data length value
        pssh[i++] = (wvCencHeader.length & 0xFF000000) >> 24;
        pssh[i++] = (wvCencHeader.length & 0x00FF0000) >> 16;
        pssh[i++] = (wvCencHeader.length & 0x0000FF00) >> 8;
        pssh[i++] = wvCencHeader.length & 0x000000FF;

        // Copy Widevine CENC header
        pssh.set(wvCencHeader, i);

        // Convert to BASE64 string
        pssh = String.fromCharCode.apply(null, pssh);
        pssh = BASE64.encodeASCII(pssh);

        return {
            schemeIdUri: 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
            value: 'com.widevine.alpha',
            pssh: {
                __text: pssh
            }
        };
    }

    function processManifest(xmlDoc, manifestLoadedTime) {
        var manifest = {};
        var contentProtections = [];
        var smoothStreamingMedia = xmlDoc.getElementsByTagName('SmoothStreamingMedia')[0];
        var protection = xmlDoc.getElementsByTagName('Protection')[0];
        var protectionHeader = null;
        var period = undefined,
            adaptations = undefined,
            contentProtection = undefined,
            KID = undefined,
            timestampOffset = undefined,
            startTime = undefined,
            segments = undefined,
            timescale = undefined,
            i = undefined,
            j = undefined;

        // Set manifest node properties
        manifest.protocol = 'MSS';
        manifest.profiles = 'urn:mpeg:dash:profile:isoff-live:2011';
        manifest.type = smoothStreamingMedia.getAttribute('IsLive') === 'TRUE' ? 'dynamic' : 'static';
        timescale = smoothStreamingMedia.getAttribute('TimeScale');
        manifest.timescale = timescale ? parseFloat(timescale) : DEFAULT_TIME_SCALE;
        manifest.timeShiftBufferDepth = parseFloat(smoothStreamingMedia.getAttribute('DVRWindowLength')) / manifest.timescale;
        manifest.mediaPresentationDuration = parseFloat(smoothStreamingMedia.getAttribute('Duration')) === 0 ? Infinity : parseFloat(smoothStreamingMedia.getAttribute('Duration')) / manifest.timescale;
        manifest.minBufferTime = mediaPlayerModel.getStableBufferTime();
        manifest.ttmlTimeIsRelative = true;

        // In case of live streams, set availabilityStartTime property according to DVRWindowLength
        if (manifest.type === 'dynamic') {
            manifest.availabilityStartTime = new Date(manifestLoadedTime.getTime() - manifest.timeShiftBufferDepth * 1000);
            manifest.refreshManifestOnSwitchTrack = true;
            manifest.doNotUpdateDVRWindowOnBufferUpdated = true; // done by Mss fragment processor
            manifest.ignorePostponeTimePeriod = true; // in Mss, manifest is never updated
        }

        // Map period node to manifest root node
        manifest.Period = mapPeriod(smoothStreamingMedia, manifest.timescale);
        manifest.Period_asArray = [manifest.Period];

        // Initialize period start time
        period = manifest.Period;
        period.start = 0;

        // ContentProtection node
        if (protection !== undefined) {
            protectionHeader = xmlDoc.getElementsByTagName('ProtectionHeader')[0];

            // Some packagers put newlines into the ProtectionHeader base64 string, which is not good
            // because this cannot be correctly parsed. Let's just filter out any newlines found in there.
            protectionHeader.firstChild.data = protectionHeader.firstChild.data.replace(/\n|\r/g, '');

            // Get KID (in CENC format) from protection header
            KID = getKIDFromProtectionHeader(protectionHeader);

            // Create ContentProtection for PlayReady
            contentProtection = createPRContentProtection(protectionHeader);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            // Create ContentProtection for Widevine (as a CENC protection)
            contentProtection = createWidevineContentProtection(protectionHeader, KID);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            manifest.ContentProtection = contentProtections;
            manifest.ContentProtection_asArray = contentProtections;
        }

        adaptations = period.AdaptationSet_asArray;

        for (i = 0; i < adaptations.length; i += 1) {
            adaptations[i].SegmentTemplate.initialization = '$Bandwidth$';
            // Propagate content protection information into each adaptation
            if (manifest.ContentProtection !== undefined) {
                adaptations[i].ContentProtection = manifest.ContentProtection;
                adaptations[i].ContentProtection_asArray = manifest.ContentProtection_asArray;
            }

            if (manifest.type === 'dynamic') {
                // Match timeShiftBufferDepth to video segment timeline duration
                if (manifest.timeShiftBufferDepth > 0 && adaptations[i].contentType === 'video' && manifest.timeShiftBufferDepth > adaptations[i].SegmentTemplate.SegmentTimeline.duration) {
                    manifest.timeShiftBufferDepth = adaptations[i].SegmentTemplate.SegmentTimeline.duration;
                }
            }
        }

        if (manifest.timeShiftBufferDepth < manifest.minBufferTime) {
            manifest.minBufferTime = manifest.timeShiftBufferDepth;
        }

        // Delete Content Protection under root manifest node
        delete manifest.ContentProtection;
        delete manifest.ContentProtection_asArray;

        // In case of VOD streams, check if start time is greater than 0
        // Then determine timestamp offset according to higher audio/video start time
        // (use case = live stream delinearization)
        if (manifest.type === 'static') {
            for (i = 0; i < adaptations.length; i++) {
                if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                    segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                    startTime = segments[0].t / adaptations[i].SegmentTemplate.timescale;
                    if (timestampOffset === undefined) {
                        timestampOffset = startTime;
                    }
                    timestampOffset = Math.min(timestampOffset, startTime);
                    // Correct content duration according to minimum adaptation's segments duration
                    // in order to force <video> element sending 'ended' event
                    manifest.mediaPresentationDuration = Math.min(manifest.mediaPresentationDuration, adaptations[i].SegmentTemplate.SegmentTimeline.duration);
                }
            }

            // Patch segment templates timestamps and determine period start time (since audio/video should not be aligned to 0)
            if (timestampOffset > 0) {
                for (i = 0; i < adaptations.length; i++) {
                    segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                    for (j = 0; j < segments.length; j++) {
                        if (!segments[j].tManifest) {
                            segments[j].tManifest = segments[j].t;
                        }
                        segments[j].t -= timestampOffset * adaptations[i].SegmentTemplate.timescale;
                    }
                    if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                        period.start = Math.max(segments[0].t, period.start);
                        adaptations[i].SegmentTemplate.presentationTimeOffset = period.start;
                    }
                }
                period.start /= manifest.timescale;
            }
        }

        manifest.mediaPresentationDuration = Math.floor(manifest.mediaPresentationDuration * 1000) / 1000;
        period.duration = manifest.mediaPresentationDuration;

        return manifest;
    }

    function parseDOM(data) {

        var xmlDoc = null;

        if (window.DOMParser) {
            var parser = new window.DOMParser();

            xmlDoc = parser.parseFromString(data, 'text/xml');
            if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
                throw new Error('parsing the manifest failed');
            }
        }

        return xmlDoc;
    }

    function getMatchers() {
        return null;
    }

    function getIron() {
        return null;
    }

    function internalParse(data) {
        var xmlDoc = null;
        var manifest = null;

        var startTime = window.performance.now();

        // Parse the MSS XML manifest
        xmlDoc = parseDOM(data);

        var xmlParseTime = window.performance.now();

        if (xmlDoc === null) {
            return null;
        }

        // Convert MSS manifest into DASH manifest
        manifest = processManifest(xmlDoc, new Date());

        var mss2dashTime = window.performance.now();

        log('Parsing complete: (xmlParsing: ' + (xmlParseTime - startTime).toPrecision(3) + 'ms, mss2dash: ' + (mss2dashTime - xmlParseTime).toPrecision(3) + 'ms, total: ' + ((mss2dashTime - startTime) / 1000).toPrecision(3) + 's)');

        return manifest;
    }

    instance = {
        parse: internalParse,
        getMatchers: getMatchers,
        getIron: getIron
    };

    setup();

    return instance;
}

MssParser.__dashjs_factory_name = 'MssParser';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssParser);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],10:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataChunk =
//Represents a data structure that keep all the necessary info about a single init/media segment
function DataChunk() {
  _classCallCheck(this, DataChunk);

  this.streamId = null;
  this.mediaInfo = null;
  this.segmentType = null;
  this.quality = NaN;
  this.index = NaN;
  this.bytes = null;
  this.start = NaN;
  this.end = NaN;
  this.duration = NaN;
  this.representationId = null;
  this.endFragment = null;
};

exports["default"] = DataChunk;
module.exports = exports["default"];

},{}],11:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FragmentRequest = function FragmentRequest() {
  _classCallCheck(this, FragmentRequest);

  this.action = FragmentRequest.ACTION_DOWNLOAD;
  this.startTime = NaN;
  this.mediaType = null;
  this.mediaInfo = null;
  this.type = null;
  this.duration = NaN;
  this.timescale = NaN;
  this.range = null;
  this.url = null;
  this.serviceLocation = null;
  this.requestStartDate = null;
  this.firstByteDate = null;
  this.requestEndDate = null;
  this.quality = NaN;
  this.index = NaN;
  this.availabilityStartTime = null;
  this.availabilityEndTime = null;
  this.wallStartTime = null;
  this.bytesLoaded = NaN;
  this.bytesTotal = NaN;
  this.delayLoadingTime = NaN;
  this.responseType = 'arraybuffer';
  this.representationId = null;
};

FragmentRequest.ACTION_DOWNLOAD = 'download';
FragmentRequest.ACTION_COMPLETE = 'complete';

exports['default'] = FragmentRequest;
module.exports = exports['default'];

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3NpbW9uaWEvZ2l0L2Rhc2guanMvc3JjL2NvcmUvZXZlbnRzL0V2ZW50c0Jhc2UuanMiLCIvVXNlcnMvc3NpbW9uaWEvZ2l0L2Rhc2guanMvc3JjL21zcy9Nc3NFdmVudHMuanMiLCIvVXNlcnMvc3NpbW9uaWEvZ2l0L2Rhc2guanMvc3JjL21zcy9Nc3NGcmFnbWVudEluZm9Db250cm9sbGVyLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRNb292UHJvY2Vzc29yLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRQcm9jZXNzb3IuanMiLCIvVXNlcnMvc3NpbW9uaWEvZ2l0L2Rhc2guanMvc3JjL21zcy9Nc3NIYW5kbGVyLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9tc3MvaW5kZXguanMiLCIvVXNlcnMvc3NpbW9uaWEvZ2l0L2Rhc2guanMvc3JjL21zcy9wYXJzZXIvTXNzUGFyc2VyLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvdm8vRGF0YUNodW5rLmpzIiwiL1VzZXJzL3NzaW1vbmlhL2dpdC9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvdm8vRnJhZ21lbnRSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNrQ00sVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTs7O2lCQUFWLFVBQVU7O2VBQ0wsZ0JBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtB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LEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQSxJQUFLLEVBQUUsQ0FBQztBQUN4QyxZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsSUFBSyxFQUFFLENBQUM7QUFDeEMsWUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFBLElBQUssQ0FBQyxDQUFDO0FBQ3ZDLFlBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFJLE1BQU0sR0FBRyxVQUFVLEFBQUMsQ0FBQzs7O0FBR2xDLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsU0FBQyxJQUFJLENBQUMsQ0FBQzs7O0FBR1AsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9HLFNBQUMsSUFBSSxFQUFFLENBQUM7OztBQUdSLFlBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsSUFBSyxFQUFFLENBQUM7QUFDckQsWUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQSxJQUFLLEVBQUUsQ0FBQztBQUNyRCxZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcs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ZUFBZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgRXZlbnRzQmFzZSB7XG4gICAgZXh0ZW5kIChldmVudHMsIGNvbmZpZykge1xuICAgICAgICBpZiAoIWV2ZW50cykgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvdmVycmlkZSA9IGNvbmZpZyA/IGNvbmZpZy5vdmVycmlkZSA6IGZhbHNlO1xuICAgICAgICBsZXQgcHVibGljT25seSA9IGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNPbmx5IDogZmFsc2U7XG5cblxuICAgICAgICBmb3IgKGNvbnN0IGV2dCBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmICghZXZlbnRzLmhhc093blByb3BlcnR5KGV2dCkgfHwgKHRoaXNbZXZ0XSAmJiAhb3ZlcnJpZGUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwdWJsaWNPbmx5ICYmIGV2ZW50c1tldnRdLmluZGV4T2YoJ3B1YmxpY18nKSA9PT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpc1tldnRdID0gZXZlbnRzW2V2dF07XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQmFzZTsiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuaW1wb3J0IEV2ZW50c0Jhc2UgZnJvbSAnLi4vY29yZS9ldmVudHMvRXZlbnRzQmFzZSc7XG5cbmNsYXNzIE1zc0V2ZW50cyBleHRlbmRzIEV2ZW50c0Jhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5GUkFHTUVOVF9JTkZPX0xPQURJTkdfQ09NUExFVEVEID0gJ2ZyYWdtZW50SW5mb0xvYWRpbmdDb21wbGV0ZWQnO1xuICAgIH1cbn1cblxubGV0IG1zc0V2ZW50cyA9IG5ldyBNc3NFdmVudHMoKTtcbmV4cG9ydCBkZWZhdWx0IG1zc0V2ZW50cztcbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBNc3NFdmVudHMgZnJvbSAnLi9Nc3NFdmVudHMnO1xuaW1wb3J0IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3NvciBmcm9tICcuL01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XG5cbmZ1bmN0aW9uIE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgbGV0IGZyYWdtZW50TW9kZWw7XG4gICAgbGV0IGluZGV4SGFuZGxlcjtcbiAgICBsZXQgc3RhcnRlZDtcbiAgICBsZXQgdHlwZTtcbiAgICBsZXQgYnVmZmVyVGltZW91dDtcbiAgICBsZXQgX2ZyYWdtZW50SW5mb1RpbWU7XG4gICAgbGV0IHN0YXJ0RnJhZ21lbnRJbmZvRGF0ZTtcbiAgICBsZXQgc3RhcnRUaW1lU3RhbXBWYWx1ZTtcbiAgICBsZXQgZGVsdGFUaW1lO1xuICAgIGxldCBzZWdtZW50RHVyYXRpb247XG5cbiAgICBsZXQgc3RyZWFtUHJvY2Vzc29yID0gY29uZmlnLnN0cmVhbVByb2Nlc3NvcjtcbiAgICBsZXQgZXZlbnRCdXMgPSBjb25maWcuZXZlbnRCdXM7XG4gICAgbGV0IG1ldHJpY3NNb2RlbCA9IGNvbmZpZy5tZXRyaWNzTW9kZWw7XG4gICAgbGV0IHBsYXliYWNrQ29udHJvbGxlciA9IGNvbmZpZy5wbGF5YmFja0NvbnRyb2xsZXI7XG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XG4gICAgY29uc3QgbG9nID0gY29uZmlnLmxvZztcblxuICAgIGNvbnN0IGNvbnRyb2xsZXJUeXBlID0gJ01zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXInO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHN0YXJ0RnJhZ21lbnRJbmZvRGF0ZSA9IG51bGw7XG4gICAgICAgIHN0YXJ0VGltZVN0YW1wVmFsdWUgPSBudWxsO1xuICAgICAgICBkZWx0YVRpbWUgPSAwO1xuICAgICAgICBzZWdtZW50RHVyYXRpb24gPSBOYU47XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgdG8gc3RyZWFtIHByb2Nlc3NvciBhcyBleHRlcm5hbCBjb250cm9sbGVyXG4gICAgICAgIHN0cmVhbVByb2Nlc3Nvci5yZWdpc3RlckV4dGVybmFsQ29udHJvbGxlcihpbnN0YW5jZSk7XG4gICAgICAgIHR5cGUgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0VHlwZSgpO1xuICAgICAgICBmcmFnbWVudE1vZGVsID0gc3RyZWFtUHJvY2Vzc29yLmdldEZyYWdtZW50TW9kZWwoKTtcbiAgICAgICAgaW5kZXhIYW5kbGVyID0gc3RyZWFtUHJvY2Vzc29yLmdldEluZGV4SGFuZGxlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlciA9IHN0cmVhbVByb2Nlc3Nvci5nZXRSZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgbGV0IHJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb25Db250cm9sbGVyLmdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpO1xuXG4gICAgICAgIHJldHVybiByZXByZXNlbnRhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kUmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgIGZyYWdtZW50TW9kZWwuZXhlY3V0ZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNGcmFnbWVudEluZm9SZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC51cmwpIHtcbiAgICAgICAgICAgIHJlcXVlc3QudXJsID0gcmVxdWVzdC51cmwucmVwbGFjZSgnRnJhZ21lbnRzJywgJ0ZyYWdtZW50SW5mbycpO1xuICAgICAgICAgICAgcmVxdWVzdC50eXBlID0gJ0ZyYWdtZW50SW5mb1NlZ21lbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GcmFnbWVudFJlcXVlc3QocmVxdWVzdCkge1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgcmVxdWVzdCBzaWduYWxzIGVuZCBvZiBzdHJlYW1cbiAgICAgICAgaWYgKChyZXF1ZXN0ICE9PSBudWxsKSAmJiAocmVxdWVzdC5hY3Rpb24gPT09IHJlcXVlc3QuQUNUSU9OX0NPTVBMRVRFKSkge1xuICAgICAgICAgICAgZG9TdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX2ZyYWdtZW50SW5mb1RpbWUgPSByZXF1ZXN0LnN0YXJ0VGltZSArIHJlcXVlc3QuZHVyYXRpb247XG4gICAgICAgICAgICByZXF1ZXN0ID0gYXNGcmFnbWVudEluZm9SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgICAgICAgICBpZiAoc3RyZWFtUHJvY2Vzc29yLmdldEZyYWdtZW50TW9kZWwoKS5pc0ZyYWdtZW50TG9hZGVkT3JQZW5kaW5nKHJlcXVlc3QpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IGluZGV4SGFuZGxlci5nZXROZXh0U2VnbWVudFJlcXVlc3QoZ2V0Q3VycmVudFJlcHJlc2VudGF0aW9uKCkpO1xuICAgICAgICAgICAgICAgIG9uRnJhZ21lbnRSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9nKCdbRnJhZ21lbnRJbmZvQ29udHJvbGxlcl1bJyArIHR5cGUgKyAnXSBvbkZyYWdtZW50UmVxdWVzdCAnICsgcmVxdWVzdC51cmwpO1xuXG4gICAgICAgICAgICAvLyBEb3dubG9hZCB0aGUgZnJhZ21lbnQgaW5mbyBzZWdtZW50XG4gICAgICAgICAgICBzZW5kUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIG1vcmUgZnJhZ21lbnQgaW4gY3VycmVudCBsaXN0XG4gICAgICAgICAgICBsb2coJ1tGcmFnbWVudEluZm9Db250cm9sbGVyXVsnICsgdHlwZSArICddIGJ1ZmZlckZyYWdtZW50SW5mbyBmYWlsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1ZmZlckZyYWdtZW50SW5mbygpIHtcbiAgICAgICAgdmFyIHNlZ21lbnRUaW1lO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgc3RhdGVcbiAgICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2coJ1tGcmFnbWVudEluZm9Db250cm9sbGVyXVsnICsgdHlwZSArICddIFN0YXJ0IGJ1ZmZlcmluZyBwcm9jZXNzLi4uJyk7XG5cbiAgICAgICAgLy8gR2V0IG5leHQgc2VnbWVudCB0aW1lXG4gICAgICAgIHNlZ21lbnRUaW1lID0gX2ZyYWdtZW50SW5mb1RpbWU7XG5cbiAgICAgICAgbG9nKCdbRnJhZ21lbnRJbmZvQ29udHJvbGxlcl1bJyArIHR5cGUgKyAnXSBsb2FkTmV4dEZyYWdtZW50IGZvciB0aW1lOiAnICsgc2VnbWVudFRpbWUpO1xuXG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbiA9IGdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpO1xuICAgICAgICBsZXQgcmVxdWVzdCA9IGluZGV4SGFuZGxlci5nZXRTZWdtZW50UmVxdWVzdEZvclRpbWUocmVwcmVzZW50YXRpb24sIHNlZ21lbnRUaW1lKTtcbiAgICAgICAgb25GcmFnbWVudFJlcXVlc3QocmVxdWVzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsYXlMb2FkTmV4dEZyYWdtZW50SW5mbyhkZWxheSkge1xuICAgICAgICB2YXIgZGVsYXlNcyA9IE1hdGgucm91bmQoTWF0aC5taW4oKGRlbGF5ICogMTAwMCksIDIwMDApKTtcblxuICAgICAgICBsb2coJ1tGcmFnbWVudEluZm9Db250cm9sbGVyXVsnICsgdHlwZSArICddIENoZWNrIGJ1ZmZlciBkZWx0YSA9ICcgKyBkZWxheU1zICsgJyBtcycpO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChidWZmZXJUaW1lb3V0KTtcbiAgICAgICAgYnVmZmVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYnVmZmVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBidWZmZXJGcmFnbWVudEluZm8oKTtcbiAgICAgICAgfSwgZGVsYXlNcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GcmFnbWVudEluZm9Mb2FkZWRDb21wbGV0ZWQoZSkge1xuICAgICAgICBpZiAoZS5zdHJlYW1Qcm9jZXNzb3IgIT09IHN0cmVhbVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSBlLmZyYWdtZW50SW5mby5yZXF1ZXN0O1xuICAgICAgICBsZXQgZGVsdGFEYXRlLFxuICAgICAgICAgICAgZGVsdGFUaW1lU3RhbXA7XG5cblxuICAgICAgICBpZiAoIWUuZnJhZ21lbnRJbmZvLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsb2coJ1tGcmFnbWVudEluZm9Db250cm9sbGVyXVsnICsgdHlwZSArICddIEVSUk9SIGxvYWRpbmcgJywgcmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VnbWVudER1cmF0aW9uID0gcmVxdWVzdC5kdXJhdGlvbjtcbiAgICAgICAgbG9nKCdbRnJhZ21lbnRJbmZvQ29udHJvbGxlcl1bJyArIHR5cGUgKyAnXSBGcmFnbWVudEluZm8gbG9hZGVkICcsIHJlcXVlc3QudXJsKTtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHNlZ21lbnQgbGlzdFxuICAgICAgICAgICAgbGV0IG1zc0ZyYWdtZW50TW9vZlByb2Nlc3NvciA9IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb250ZXh0KS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1ldHJpY3NNb2RlbDogbWV0cmljc01vZGVsLFxuICAgICAgICAgICAgICAgIHBsYXliYWNrQ29udHJvbGxlcjogcGxheWJhY2tDb250cm9sbGVyLFxuICAgICAgICAgICAgICAgIElTT0JveGVyOiBJU09Cb3hlcixcbiAgICAgICAgICAgICAgICBsb2c6IGxvZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IudXBkYXRlU2VnbWVudExpc3QoZS5mcmFnbWVudEluZm8sIHN0cmVhbVByb2Nlc3Nvcik7XG5cbiAgICAgICAgICAgIGRlbHRhRGF0ZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0RnJhZ21lbnRJbmZvRGF0ZSkgLyAxMDAwO1xuICAgICAgICAgICAgZGVsdGFUaW1lU3RhbXAgPSAoX2ZyYWdtZW50SW5mb1RpbWUgKyBzZWdtZW50RHVyYXRpb24pIC0gc3RhcnRUaW1lU3RhbXBWYWx1ZTtcbiAgICAgICAgICAgIGRlbHRhVGltZSA9IChkZWx0YVRpbWVTdGFtcCAtIGRlbHRhRGF0ZSkgPiAwID8gKGRlbHRhVGltZVN0YW1wIC0gZGVsdGFEYXRlKSA6IDA7XG4gICAgICAgICAgICBkZWxheUxvYWROZXh0RnJhZ21lbnRJbmZvKGRlbHRhVGltZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZygnW0ZyYWdtZW50SW5mb0NvbnRyb2xsZXJdWycgKyB0eXBlICsgJ10gRVJST1IgLSBJbnRlcm5hbCBlcnJvciB3aGlsZSBwcm9jZXNzaW5nIGZyYWdtZW50IGluZm8gc2VnbWVudCAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UGxheWJhY2soKSB7XG4gICAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnRGcmFnbWVudEluZm9EYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHN0YXJ0VGltZVN0YW1wVmFsdWUgPSBfZnJhZ21lbnRJbmZvVGltZTtcblxuICAgICAgICBsb2coJ1tGcmFnbWVudEluZm9Db250cm9sbGVyXVsnICsgdHlwZSArICddIHN0YXJ0UGxheWJhY2snKTtcblxuICAgICAgICAvLyBTdGFydCBidWZmZXJpbmcgcHJvY2Vzc1xuICAgICAgICBidWZmZXJGcmFnbWVudEluZm8uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1N0YXJ0KCkge1xuXG4gICAgICAgIGxldCBzZWdtZW50cztcblxuICAgICAgICBpZiAoc3RhcnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRCdXMub24oTXNzRXZlbnRzLkZSQUdNRU5UX0lORk9fTE9BRElOR19DT01QTEVURUQsIG9uRnJhZ21lbnRJbmZvTG9hZGVkQ29tcGxldGVkLCBpbnN0YW5jZSk7XG5cbiAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGxvZygnW0ZyYWdtZW50SW5mb0NvbnRyb2xsZXJdWycgKyB0eXBlICsgJ10gU1RBUlQnKTtcblxuICAgICAgICBsZXQgcmVwcmVzZW50YXRpb24gPSBnZXRDdXJyZW50UmVwcmVzZW50YXRpb24oKTtcbiAgICAgICAgc2VnbWVudHMgPSByZXByZXNlbnRhdGlvbi5zZWdtZW50cztcblxuICAgICAgICBpZiAoc2VnbWVudHMgJiYgc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2ZyYWdtZW50SW5mb1RpbWUgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wcmVzZW50YXRpb25TdGFydFRpbWUgLSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5kdXJhdGlvbjtcblxuICAgICAgICAgICAgc3RhcnRQbGF5YmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXhIYW5kbGVyLnVwZGF0ZVNlZ21lbnRMaXN0KHJlcHJlc2VudGF0aW9uKTtcbiAgICAgICAgICAgIHNlZ21lbnRzID0gcmVwcmVzZW50YXRpb24uc2VnbWVudHM7XG4gICAgICAgICAgICBpZiAoc2VnbWVudHMgJiYgc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9mcmFnbWVudEluZm9UaW1lID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHJlc2VudGF0aW9uU3RhcnRUaW1lIC0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uZHVyYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXJ0UGxheWJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvU3RvcCgpIHtcbiAgICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9nKCdbRnJhZ21lbnRJbmZvQ29udHJvbGxlcl1bJyArIHR5cGUgKyAnXSBTVE9QJyk7XG5cbiAgICAgICAgZXZlbnRCdXMub2ZmKE1zc0V2ZW50cy5GUkFHTUVOVF9JTkZPX0xPQURJTkdfQ09NUExFVEVELCBvbkZyYWdtZW50SW5mb0xvYWRlZENvbXBsZXRlZCwgaW5zdGFuY2UpO1xuXG4gICAgICAgIC8vIFN0b3AgYnVmZmVyaW5nIHByb2Nlc3NcbiAgICAgICAgY2xlYXJUaW1lb3V0KGJ1ZmZlclRpbWVvdXQpO1xuICAgICAgICBzdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgc3RhcnRGcmFnbWVudEluZm9EYXRlID0gbnVsbDtcbiAgICAgICAgc3RhcnRUaW1lU3RhbXBWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvU3RvcCgpO1xuICAgICAgICBzdHJlYW1Qcm9jZXNzb3IudW5yZWdpc3RlckV4dGVybmFsQ29udHJvbGxlcihpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gICAgICAgIGNvbnRyb2xsZXJUeXBlOiBjb250cm9sbGVyVHlwZSxcbiAgICAgICAgc3RhcnQ6IGRvU3RhcnQsXG4gICAgICAgIHJlc2V0OiByZXNldFxuICAgIH07XG5cbiAgICBzZXR1cCgpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5Nc3NGcmFnbWVudEluZm9Db250cm9sbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNc3NGcmFnbWVudEluZm9Db250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgbGV0IG1ldHJpY3NNb2RlbCA9IGNvbmZpZy5tZXRyaWNzTW9kZWw7XG4gICAgbGV0IHBsYXliYWNrQ29udHJvbGxlciA9IGNvbmZpZy5wbGF5YmFja0NvbnRyb2xsZXI7XG4gICAgbGV0IGVycm9ySGFuZGxlciA9IGNvbmZpZy5lcnJIYW5kbGVyO1xuICAgIGNvbnN0IElTT0JveGVyID0gY29uZmlnLklTT0JveGVyO1xuICAgIGNvbnN0IGxvZyA9IGNvbmZpZy5sb2c7XG5cbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzVGZyZihyZXF1ZXN0LCB0ZnJmLCB0ZmR0LCBzdHJlYW1Qcm9jZXNzb3IpIHtcbiAgICAgICAgbGV0IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlciA9IHN0cmVhbVByb2Nlc3Nvci5nZXRSZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgbGV0IHJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb25Db250cm9sbGVyLmdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpO1xuICAgICAgICBsZXQgaW5kZXhIYW5kbGVyID0gc3RyZWFtUHJvY2Vzc29yLmdldEluZGV4SGFuZGxlcigpO1xuXG4gICAgICAgIGxldCBtYW5pZmVzdCA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24ucGVyaW9kLm1wZC5tYW5pZmVzdDtcbiAgICAgICAgbGV0IGFkYXB0YXRpb24gPSBtYW5pZmVzdC5QZXJpb2RfYXNBcnJheVtyZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZC5pbmRleF0uQWRhcHRhdGlvblNldF9hc0FycmF5W3JlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24uaW5kZXhdO1xuICAgICAgICBsZXQgdGltZXNjYWxlID0gYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUudGltZXNjYWxlO1xuXG4gICAgICAgIGlmIChtYW5pZmVzdC50eXBlICE9PSAnZHluYW1pYycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGZyZikge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLm1zc0Vycm9yKCdNU1NfTk9fVEZSRiA6IE1pc3NpbmcgdGZyZiBpbiBsaXZlIG1lZGlhIHNlZ21lbnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhZGFwdGF0aW9uJ3Mgc2VnbWVudCB0aW1lbGluZSAoYWx3YXlzIGEgU2VnbWVudFRpbWVsaW5lIGluIFNtb290aCBTdHJlYW1pbmcgdXNlIGNhc2UpXG4gICAgICAgIGxldCBzZWdtZW50cyA9IGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZS5TO1xuICAgICAgICBsZXQgZW50cmllcyA9IHRmcmYuZW50cnk7XG4gICAgICAgIGxldCBlbnRyeSxcbiAgICAgICAgICAgIHNlZ21lbnRUaW1lO1xuICAgICAgICBsZXQgc2VnbWVudCA9IG51bGw7XG4gICAgICAgIGxldCB0eXBlID0gYWRhcHRhdGlvbi5jb250ZW50VHlwZTtcbiAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICBsZXQgYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgbGV0IHJhbmdlO1xuXG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29uc2lkZXIgb25seSBmaXJzdCB0ZnJmIGVudHJ5ICh0byBhdm9pZCBwcmUtY29uZGl0aW9uIGZhaWx1cmUgb24gZnJhZ21lbnQgaW5mbyByZXF1ZXN0cylcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzWzBdO1xuXG4gICAgICAgIC8vIEdldCBsYXN0IHNlZ21lbnQgdGltZVxuICAgICAgICBzZWdtZW50VGltZSA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnRNYW5pZmVzdCA/IHBhcnNlRmxvYXQoc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0udE1hbmlmZXN0KSA6IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnQ7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSB0byBhcHBlbmQgbmV3IHNlZ21lbnQgdG8gdGltZWxpbmVcbiAgICAgICAgaWYgKGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWUgPD0gc2VnbWVudFRpbWUpIHtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIERWUiB3aW5kb3cgcmFuZ2VcbiAgICAgICAgICAgIC8vID0+IHNldCByYW5nZSBlbmQgdG8gZW5kIHRpbWUgb2YgY3VycmVudCBzZWdtZW50XG4gICAgICAgICAgICByYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogc2VnbWVudHNbMF0udCAvIGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSxcbiAgICAgICAgICAgICAgICBlbmQ6ICh0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgLyBhZGFwdGF0aW9uLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGUpICsgcmVxdWVzdC5kdXJhdGlvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXBkYXRlRFZSKHJlcXVlc3QubWVkaWFUeXBlLCByYW5nZSwgc3RyZWFtUHJvY2Vzc29yLmdldFN0cmVhbUluZm8oKS5tYW5pZmVzdEluZm8pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nKCdbTXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yXVsnLCB0eXBlLCddIEFkZCBuZXcgc2VnbWVudCAtIHQgPSAnLCAoZW50cnkuZnJhZ21lbnRfYWJzb2x1dGVfdGltZSAvIHRpbWVzY2FsZSkpO1xuICAgICAgICBzZWdtZW50ID0ge307XG4gICAgICAgIHNlZ21lbnQudCA9IGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWU7XG4gICAgICAgIHNlZ21lbnQuZCA9IGVudHJ5LmZyYWdtZW50X2R1cmF0aW9uO1xuICAgICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCAmJiBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEdldCB0aW1lc3RhbXAgb2YgdGhlIGxhc3Qgc2VnbWVudFxuICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdCA9IHNlZ21lbnQudDtcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBzZWdtZW50cycgYXZhaWxhYmlsaXR5IHN0YXJ0IHRpbWVcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IHQgLSAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggKiB0aW1lc2NhbGUpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgc2VnbWVudHMgcHJpb3IgdG8gYXZhaWxhYmlsaXR5IHN0YXJ0IHRpbWVcbiAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1swXTtcbiAgICAgICAgICAgIHdoaWxlIChzZWdtZW50LnQgPCBhdmFpbGFiaWxpdHlTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBsb2coJ1tNc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3JdUmVtb3ZlIHNlZ21lbnQgIC0gdCA9ICcgKyAoc2VnbWVudC50IC8gdGltZXNjYWxlKSk7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIERWUiB3aW5kb3cgcmFuZ2VcbiAgICAgICAgICAgIC8vID0+IHNldCByYW5nZSBlbmQgdG8gZW5kIHRpbWUgb2YgY3VycmVudCBzZWdtZW50XG4gICAgICAgICAgICByYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogc2VnbWVudHNbMF0udCAvIGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSxcbiAgICAgICAgICAgICAgICBlbmQ6ICh0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgLyBhZGFwdGF0aW9uLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGUpICsgcmVxdWVzdC5kdXJhdGlvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXBkYXRlRFZSKHJlcXVlc3QubWVkaWFUeXBlLCByYW5nZSwgc3RyZWFtUHJvY2Vzc29yLmdldFN0cmVhbUluZm8oKS5tYW5pZmVzdEluZm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhIYW5kbGVyLnVwZGF0ZVNlZ21lbnRMaXN0KHJlcHJlc2VudGF0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEVlIodHlwZSwgcmFuZ2UsIG1hbmlmZXN0SW5mbykge1xuICAgICAgICBsZXQgZHZySW5mb3MgPSBtZXRyaWNzTW9kZWwuZ2V0TWV0cmljc0Zvcih0eXBlKS5EVlJJbmZvO1xuICAgICAgICBpZiAoZHZySW5mb3MpIHtcbiAgICAgICAgICAgIGlmIChkdnJJbmZvcy5sZW5ndGggPT09IDAgfHwgKGR2ckluZm9zLmxlbmd0aCA+IDAgJiYgcmFuZ2UuZW5kID4gZHZySW5mb3NbZHZySW5mb3MubGVuZ3RoIC0gMV0ucmFuZ2UuZW5kKSkge1xuICAgICAgICAgICAgICAgIGxvZygnW01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcl1bJywgdHlwZSwgJ10gVXBkYXRlIERWUiBJbmZvcyBbJyArIHJhbmdlLnN0YXJ0ICsgJyAtICcgKyByYW5nZS5lbmQgKyAnXScpO1xuICAgICAgICAgICAgICAgIG1ldHJpY3NNb2RlbC5hZGREVlJJbmZvKHR5cGUsIHBsYXliYWNrQ29udHJvbGxlci5nZXRUaW1lKCksIG1hbmlmZXN0SW5mbywgcmFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBvZmZzZXQgb2YgdGhlIDFzdCBieXRlIG9mIGEgY2hpbGQgYm94IHdpdGhpbiBhIGNvbnRhaW5lciBib3hcbiAgICBmdW5jdGlvbiBnZXRCb3hPZmZzZXQocGFyZW50LCB0eXBlKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSA4O1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudC5ib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5ib3hlc1tpXS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCArPSBwYXJlbnQuYm94ZXNbaV0uc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRGcmFnbWVudChlLCBzcCkge1xuXG4gICAgICAgIGxldCBpO1xuXG4gICAgICAgIC8vIGUucmVxdWVzdCBjb250YWlucyByZXF1ZXN0IGRlc2NyaXB0aW9uIG9iamVjdFxuICAgICAgICAvLyBlLnJlc3BvbnNlIGNvbnRhaW5zIGZyYWdtZW50IGJ5dGVzXG4gICAgICAgIGxldCBpc29GaWxlID0gSVNPQm94ZXIucGFyc2VCdWZmZXIoZS5yZXNwb25zZSk7XG4gICAgICAgIC8vIFVwZGF0ZSB0cmFja19JZCBpbiB0ZmhkIGJveFxuICAgICAgICBsZXQgdGZoZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmaGQnKTtcbiAgICAgICAgdGZoZC50cmFja19JRCA9IGUucmVxdWVzdC5tZWRpYUluZm8uaW5kZXggKyAxO1xuXG4gICAgICAgIC8vIEFkZCB0ZmR0IGJveFxuICAgICAgICBsZXQgdGZkdCA9IGlzb0ZpbGUuZmV0Y2goJ3RmZHQnKTtcbiAgICAgICAgbGV0IHRyYWYgPSBpc29GaWxlLmZldGNoKCd0cmFmJyk7XG4gICAgICAgIGlmICh0ZmR0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0ZmR0ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndGZkdCcsIHRyYWYsIHRmaGQpO1xuICAgICAgICAgICAgdGZkdC52ZXJzaW9uID0gMTtcbiAgICAgICAgICAgIHRmZHQuZmxhZ3MgPSAwO1xuICAgICAgICAgICAgdGZkdC5iYXNlTWVkaWFEZWNvZGVUaW1lID0gTWF0aC5mbG9vcihlLnJlcXVlc3Quc3RhcnRUaW1lICogZS5yZXF1ZXN0LnRpbWVzY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHJ1biA9IGlzb0ZpbGUuZmV0Y2goJ3RydW4nKTtcblxuICAgICAgICAvLyBQcm9jZXNzIHRmeGQgYm94ZXNcbiAgICAgICAgLy8gVGhpcyBib3ggcHJvdmlkZSBhYnNvbHV0ZSB0aW1lc3RhbXAgYnV0IHdlIHRha2UgdGhlIHNlZ21lbnQgc3RhcnQgdGltZSBmb3IgdGZkdFxuICAgICAgICBsZXQgdGZ4ZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmeGQnKTtcbiAgICAgICAgaWYgKHRmeGQpIHtcbiAgICAgICAgICAgIHRmeGQuX3BhcmVudC5ib3hlcy5zcGxpY2UodGZ4ZC5fcGFyZW50LmJveGVzLmluZGV4T2YodGZ4ZCksIDEpO1xuICAgICAgICAgICAgdGZ4ZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRmcmYgPSBpc29GaWxlLmZldGNoKCd0ZnJmJyk7XG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xuICAgICAgICBpZiAodGZyZikge1xuICAgICAgICAgICAgdGZyZi5fcGFyZW50LmJveGVzLnNwbGljZSh0ZnJmLl9wYXJlbnQuYm94ZXMuaW5kZXhPZih0ZnJmKSwgMSk7XG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHByb3RlY3RlZCBjb250ZW50IGluIFBJRkYxLjEgZm9ybWF0IChzZXBpZmYgYm94ID0gU2FtcGxlIEVuY3J5cHRpb24gUElGRilcbiAgICAgICAgLy8gPT4gY29udmVydCBzZXBpZmYgYm94IGl0IGludG8gYSBzZW5jIGJveFxuICAgICAgICAvLyA9PiBjcmVhdGUgc2FpbyBhbmQgc2FpeiBib3hlcyAoaWYgbm90IGFscmVhZHkgcHJlc2VudClcbiAgICAgICAgbGV0IHNlcGlmZiA9IGlzb0ZpbGUuZmV0Y2goJ3NlcGlmZicpO1xuICAgICAgICBpZiAoc2VwaWZmICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXBpZmYudHlwZSA9ICdzZW5jJztcbiAgICAgICAgICAgIHNlcGlmZi51c2VydHlwZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgbGV0IHNhaW8gPSBpc29GaWxlLmZldGNoKCdzYWlvJyk7XG4gICAgICAgICAgICBpZiAoc2FpbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBTYW1wbGUgQXV4aWxpYXJ5IEluZm9ybWF0aW9uIE9mZnNldHMgQm94IGJveCAoc2FpbylcbiAgICAgICAgICAgICAgICBzYWlvID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2FpbycsIHRyYWYpO1xuICAgICAgICAgICAgICAgIHNhaW8udmVyc2lvbiA9IDA7XG4gICAgICAgICAgICAgICAgc2Fpby5mbGFncyA9IDA7XG4gICAgICAgICAgICAgICAgc2Fpby5lbnRyeV9jb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgc2Fpby5vZmZzZXQgPSBbMF07XG5cbiAgICAgICAgICAgICAgICBsZXQgc2FpeiA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3NhaXonLCB0cmFmKTtcbiAgICAgICAgICAgICAgICBzYWl6LnZlcnNpb24gPSAwO1xuICAgICAgICAgICAgICAgIHNhaXouZmxhZ3MgPSAwO1xuICAgICAgICAgICAgICAgIHNhaXouc2FtcGxlX2NvdW50ID0gc2VwaWZmLnNhbXBsZV9jb3VudDtcbiAgICAgICAgICAgICAgICBzYWl6LmRlZmF1bHRfc2FtcGxlX2luZm9fc2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfaW5mb19zaXplID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VwaWZmLmZsYWdzICYgMHgwMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWItc2FtcGxlIGVuY3J5cHRpb24gPT4gc2V0IHNhbXBsZV9pbmZvX3NpemUgZm9yIGVhY2ggc2FtcGxlXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZXBpZmYuc2FtcGxlX2NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEwID0gOCAoSW5pdGlhbGl6YXRpb25WZWN0b3IgZmllbGQgc2l6ZSkgKyAyIChzdWJzYW1wbGVfY291bnQgZmllbGQgc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDYgPSAyIChCeXRlc09mQ2xlYXJEYXRhIGZpZWxkIHNpemUpICsgNCAoQnl0ZXNPZkVuY3J5cHRlZERhdGEgZmllbGQgc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhaXouc2FtcGxlX2luZm9fc2l6ZVtpXSA9IDEwICsgKDYgKiBzZXBpZmYuZW50cnlbaV0uTnVtYmVyT2ZFbnRyaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIHN1Yi1zYW1wbGUgZW5jcnlwdGlvbiA9PiBzZXQgZGVmYXVsdCBzYW1wbGVfaW5mb19zaXplID0gSW5pdGlhbGl6YXRpb25WZWN0b3IgZmllbGQgc2l6ZSAoOClcbiAgICAgICAgICAgICAgICAgICAgc2Fpei5kZWZhdWx0X3NhbXBsZV9pbmZvX3NpemUgPSA4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRmaGQuZmxhZ3MgJj0gMHhGRkZGRkU7IC8vIHNldCB0ZmhkLmJhc2UtZGF0YS1vZmZzZXQtcHJlc2VudCB0byBmYWxzZVxuICAgICAgICB0ZmhkLmZsYWdzIHw9IDB4MDIwMDAwOyAvLyBzZXQgdGZoZC5kZWZhdWx0LWJhc2UtaXMtbW9vZiB0byB0cnVlXG4gICAgICAgIHRydW4uZmxhZ3MgfD0gMHgwMDAwMDE7IC8vIHNldCB0cnVuLmRhdGEtb2Zmc2V0LXByZXNlbnQgdG8gdHJ1ZVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0cnVuLmRhdGFfb2Zmc2V0IGZpZWxkIHRoYXQgY29ycmVzcG9uZHMgdG8gZmlyc3QgZGF0YSBieXRlIChpbnNpZGUgbWRhdCBib3gpXG4gICAgICAgIGxldCBtb29mID0gaXNvRmlsZS5mZXRjaCgnbW9vZicpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gbW9vZi5nZXRMZW5ndGgoKTtcbiAgICAgICAgdHJ1bi5kYXRhX29mZnNldCA9IGxlbmd0aCArIDg7XG5cbiAgICAgICAgLy8gVXBkYXRlIHNhaW8gYm94IG9mZnNldCBmaWVsZCBhY2NvcmRpbmcgdG8gbmV3IHNlbmMgYm94IG9mZnNldFxuICAgICAgICBsZXQgc2FpbyA9IGlzb0ZpbGUuZmV0Y2goJ3NhaW8nKTtcbiAgICAgICAgaWYgKHNhaW8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0cmFmUG9zSW5Nb29mID0gZ2V0Qm94T2Zmc2V0KG1vb2YsICd0cmFmJyk7XG4gICAgICAgICAgICBsZXQgc2VuY1Bvc0luVHJhZiA9IGdldEJveE9mZnNldCh0cmFmLCAnc2VuYycpO1xuICAgICAgICAgICAgLy8gU2V0IG9mZnNldCBmcm9tIGJlZ2luIGZyYWdtZW50IHRvIHRoZSBmaXJzdCBJViBmaWVsZCBpbiBzZW5jIGJveFxuICAgICAgICAgICAgc2Fpby5vZmZzZXRbMF0gPSB0cmFmUG9zSW5Nb29mICsgc2VuY1Bvc0luVHJhZiArIDE2OyAvLyAxNiA9IGJveCBoZWFkZXIgKDEyKSArIHNhbXBsZV9jb3VudCBmaWVsZCBzaXplICg0KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV3JpdGUgdHJhbnNmb3JtZWQvcHJvY2Vzc2VkIGZyYWdtZW50IGludG8gcmVxdWVzdCByZXBvbnNlIGRhdGFcbiAgICAgICAgZS5yZXNwb25zZSA9IGlzb0ZpbGUud3JpdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTZWdtZW50TGlzdChlLCBzcCkge1xuXG4gICAgICAgIC8vIGUucmVxdWVzdCBjb250YWlucyByZXF1ZXN0IGRlc2NyaXB0aW9uIG9iamVjdFxuICAgICAgICAvLyBlLnJlc3BvbnNlIGNvbnRhaW5zIGZyYWdtZW50IGJ5dGVzXG4gICAgICAgIGlmICghZS5yZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlLnJlc3BvbnNlIHBhcmFtZXRlciBpcyBtaXNzaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNvRmlsZSA9IElTT0JveGVyLnBhcnNlQnVmZmVyKGUucmVzcG9uc2UpO1xuICAgICAgICAvLyBVcGRhdGUgdHJhY2tfSWQgaW4gdGZoZCBib3hcbiAgICAgICAgbGV0IHRmaGQgPSBpc29GaWxlLmZldGNoKCd0ZmhkJyk7XG4gICAgICAgIHRmaGQudHJhY2tfSUQgPSBlLnJlcXVlc3QubWVkaWFJbmZvLmluZGV4ICsgMTtcblxuICAgICAgICAvLyBBZGQgdGZkdCBib3hcbiAgICAgICAgbGV0IHRmZHQgPSBpc29GaWxlLmZldGNoKCd0ZmR0Jyk7XG4gICAgICAgIGxldCB0cmFmID0gaXNvRmlsZS5mZXRjaCgndHJhZicpO1xuICAgICAgICBpZiAodGZkdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGZkdCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RmZHQnLCB0cmFmLCB0ZmhkKTtcbiAgICAgICAgICAgIHRmZHQudmVyc2lvbiA9IDE7XG4gICAgICAgICAgICB0ZmR0LmZsYWdzID0gMDtcbiAgICAgICAgICAgIHRmZHQuYmFzZU1lZGlhRGVjb2RlVGltZSA9IE1hdGguZmxvb3IoZS5yZXF1ZXN0LnN0YXJ0VGltZSAqIGUucmVxdWVzdC50aW1lc2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRmcmYgPSBpc29GaWxlLmZldGNoKCd0ZnJmJyk7XG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xuICAgICAgICBpZiAodGZyZikge1xuICAgICAgICAgICAgdGZyZi5fcGFyZW50LmJveGVzLnNwbGljZSh0ZnJmLl9wYXJlbnQuYm94ZXMuaW5kZXhPZih0ZnJmKSwgMSk7XG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBjb252ZXJ0RnJhZ21lbnQ6IGNvbnZlcnRGcmFnbWVudCxcbiAgICAgICAgdXBkYXRlU2VnbWVudExpc3Q6IHVwZGF0ZVNlZ21lbnRMaXN0XG4gICAgfTtcblxuICAgIHNldHVwKCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5Nc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgY29uc3QgTkFMVVRZUEVfU1BTID0gNztcbiAgICBjb25zdCBOQUxVVFlQRV9QUFMgPSA4O1xuICAgIGNvbnN0IGNvbnN0YW50cyA9IGNvbmZpZy5jb25zdGFudHM7XG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XG5cbiAgICBsZXQgcHJvdGVjdGlvbkNvbnRyb2xsZXIgPSBjb25maWcucHJvdGVjdGlvbkNvbnRyb2xsZXI7XG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICBwZXJpb2QsXG4gICAgICAgIGFkYXB0YXRpb25TZXQsXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLFxuICAgICAgICBjb250ZW50UHJvdGVjdGlvbixcbiAgICAgICAgdGltZXNjYWxlLFxuICAgICAgICB0cmFja0lkO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnR5cEJveChpc29GaWxlKSB7XG4gICAgICAgIGxldCBmdHlwID0gSVNPQm94ZXIuY3JlYXRlQm94KCdmdHlwJywgaXNvRmlsZSk7XG4gICAgICAgIGZ0eXAubWFqb3JfYnJhbmQgPSAnaXNvNic7XG4gICAgICAgIGZ0eXAubWlub3JfdmVyc2lvbiA9IDE7IC8vIGlzIGFuIGluZm9ybWF0aXZlIGludGVnZXIgZm9yIHRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoZSBtYWpvciBicmFuZFxuICAgICAgICBmdHlwLmNvbXBhdGlibGVfYnJhbmRzID0gW107IC8vaXMgYSBsaXN0LCB0byB0aGUgZW5kIG9mIHRoZSBib3gsIG9mIGJyYW5kcyBpc29tLCBpc282IGFuZCBtc2RoXG4gICAgICAgIGZ0eXAuY29tcGF0aWJsZV9icmFuZHNbMF0gPSAnaXNvbSc7IC8vID0+IGRlY2ltYWwgQVNDSUkgdmFsdWUgZm9yIGlzb21cbiAgICAgICAgZnR5cC5jb21wYXRpYmxlX2JyYW5kc1sxXSA9ICdpc282JzsgLy8gPT4gZGVjaW1hbCBBU0NJSSB2YWx1ZSBmb3IgaXNvNlxuICAgICAgICBmdHlwLmNvbXBhdGlibGVfYnJhbmRzWzJdID0gJ21zZGgnOyAvLyA9PiBkZWNpbWFsIEFTQ0lJIHZhbHVlIGZvciBtc2RoXG5cbiAgICAgICAgcmV0dXJuIGZ0eXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9vdkJveChpc29GaWxlKSB7XG5cbiAgICAgICAgLy8gbW9vdiBib3hcbiAgICAgICAgbGV0IG1vb3YgPSBJU09Cb3hlci5jcmVhdGVCb3goJ21vb3YnLCBpc29GaWxlKTtcblxuICAgICAgICAvLyBtb292L212aGRcbiAgICAgICAgY3JlYXRlTXZoZEJveChtb292KTtcblxuICAgICAgICAvLyBtb292L3RyYWtcbiAgICAgICAgbGV0IHRyYWsgPSBJU09Cb3hlci5jcmVhdGVCb3goJ3RyYWsnLCBtb292KTtcblxuICAgICAgICAvLyBtb292L3RyYWsvdGtoZFxuICAgICAgICBjcmVhdGVUa2hkQm94KHRyYWspO1xuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhXG4gICAgICAgIGxldCBtZGlhID0gSVNPQm94ZXIuY3JlYXRlQm94KCdtZGlhJywgdHJhayk7XG5cbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWRoZFxuICAgICAgICBjcmVhdGVNZGhkQm94KG1kaWEpO1xuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL2hkbHJcbiAgICAgICAgY3JlYXRlSGRsckJveChtZGlhKTtcblxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mXG4gICAgICAgIGxldCBtaW5mID0gSVNPQm94ZXIuY3JlYXRlQm94KCdtaW5mJywgbWRpYSk7XG5cbiAgICAgICAgc3dpdGNoIChhZGFwdGF0aW9uU2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLlZJREVPOlxuICAgICAgICAgICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL21pbmYvdm1oZFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZtaGRCb3gobWluZik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5BVURJTzpcbiAgICAgICAgICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3NtaGRcbiAgICAgICAgICAgICAgICBjcmVhdGVTbWhkQm94KG1pbmYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL21pbmYvZGluZlxuICAgICAgICBsZXQgZGluZiA9IElTT0JveGVyLmNyZWF0ZUJveCgnZGluZicsIG1pbmYpO1xuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL21pbmYvZGluZi9kcmVmXG4gICAgICAgIGNyZWF0ZURyZWZCb3goZGluZik7XG5cbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9zdGJsXG4gICAgICAgIGxldCBzdGJsID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzdGJsJywgbWluZik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IHN0dHMsIHN0c2MsIHN0Y28gYW5kIHN0c3ogYm94ZXNcbiAgICAgICAgLy8gVXNlIGRhdGEgZmllbGQgYXMgZm9yIGNvZGVtLWlzb2JveGVyIHVua25vd24gYm94ZXMgZm9yIHNldHRpbmcgZmllbGRzIHZhbHVlXG5cbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9zdGJsL3N0dHNcbiAgICAgICAgbGV0IHN0dHMgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdzdHRzJywgc3RibCk7XG4gICAgICAgIHN0dHMuX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL21pbmYvc3RibC9zdHNjXG4gICAgICAgIGxldCBzdHNjID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzYycsIHN0YmwpO1xuICAgICAgICBzdHNjLl9kYXRhID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdOyAvLyB2ZXJzaW9uID0gMCwgZmxhZ3MgPSAwLCBlbnRyeV9jb3VudCA9IDBcblxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3Rjb1xuICAgICAgICBsZXQgc3RjbyA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3N0Y28nLCBzdGJsKTtcbiAgICAgICAgc3Rjby5fZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTsgLy8gdmVyc2lvbiA9IDAsIGZsYWdzID0gMCwgZW50cnlfY291bnQgPSAwXG5cbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9zdGJsL3N0c3pcbiAgICAgICAgbGV0IHN0c3ogPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdzdHN6Jywgc3RibCk7XG4gICAgICAgIHN0c3ouX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIHNhbXBsZV9zaXplID0gMCwgc2FtcGxlX2NvdW50ID0gMFxuXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL21pbmYvc3RibC9zdHNkXG4gICAgICAgIGNyZWF0ZVN0c2RCb3goc3RibCk7XG5cbiAgICAgICAgLy8gbW9vdi9tdmV4XG4gICAgICAgIGxldCBtdmV4ID0gSVNPQm94ZXIuY3JlYXRlQm94KCdtdmV4JywgbW9vdik7XG5cbiAgICAgICAgLy8gbW9vdi9tdmV4L3RyZXhcbiAgICAgICAgY3JlYXRlVHJleEJveChtdmV4KTtcblxuICAgICAgICBpZiAoY29udGVudFByb3RlY3Rpb24gJiYgcHJvdGVjdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRLUyA9IHByb3RlY3Rpb25Db250cm9sbGVyLmdldFN1cHBvcnRlZEtleVN5c3RlbXNGcm9tQ29udGVudFByb3RlY3Rpb24oY29udGVudFByb3RlY3Rpb24pO1xuICAgICAgICAgICAgY3JlYXRlUHJvdGVjdGlvblN5c3RlbVNwZWNpZmljSGVhZGVyQm94KG1vb3YsIHN1cHBvcnRlZEtTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU12aGRCb3gobW9vdikge1xuXG4gICAgICAgIGxldCBtdmhkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnbXZoZCcsIG1vb3YpO1xuXG4gICAgICAgIG12aGQudmVyc2lvbiA9IDE7IC8vIHZlcnNpb24gPSAxICBpbiBvcmRlciB0byBoYXZlIDY0Yml0cyBkdXJhdGlvbiB2YWx1ZVxuXG4gICAgICAgIG12aGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcbiAgICAgICAgbXZoZC5tb2RpZmljYXRpb25fdGltZSA9IDA7IC8vIHRoZSBtb3N0IHJlY2VudCB0aW1lIHRoZSBwcmVzZW50YXRpb24gd2FzIG1vZGlmaWVkID0+IGlnbm9yZSAoc2V0IHRvIDApXG4gICAgICAgIG12aGQudGltZXNjYWxlID0gdGltZXNjYWxlOyAvLyB0aGUgdGltZS1zY2FsZSBmb3IgdGhlIGVudGlyZSBwcmVzZW50YXRpb24gPT4gMTAwMDAwMDAgZm9yIE1TU1xuICAgICAgICBtdmhkLmR1cmF0aW9uID0gTWF0aC5yb3VuZChwZXJpb2QuZHVyYXRpb24gKiB0aW1lc2NhbGUpOyAvLyB0aGUgbGVuZ3RoIG9mIHRoZSBwcmVzZW50YXRpb24gKGluIHRoZSBpbmRpY2F0ZWQgdGltZXNjYWxlKSA9PiAgdGFrZSBkdXJhdGlvbiBvZiBwZXJpb2RcbiAgICAgICAgbXZoZC5yYXRlID0gMS4wOyAvLyAxNi4xNiBudW1iZXIsICcxLjAnID0gbm9ybWFsIHBsYXliYWNrXG4gICAgICAgIG12aGQudm9sdW1lID0gMS4wOyAvLyA4LjggbnVtYmVyLCAnMS4wJyA9IGZ1bGwgdm9sdW1lXG4gICAgICAgIG12aGQucmVzZXJ2ZWQxID0gMDtcbiAgICAgICAgbXZoZC5yZXNlcnZlZDIgPSBbMHgwLCAweDBdO1xuICAgICAgICBtdmhkLm1hdHJpeCA9IFtcbiAgICAgICAgICAgIDEsIDAsIDAsIC8vIHByb3ZpZGVzIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4IGZvciB0aGUgdmlkZW87XG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxuICAgICAgICAgICAgMCwgMCwgMTYzODRcbiAgICAgICAgXTtcbiAgICAgICAgbXZoZC5wcmVfZGVmaW5lZCA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbXZoZC5uZXh0X3RyYWNrX0lEID0gdHJhY2tJZCArIDE7IC8vIGluZGljYXRlcyBhIHZhbHVlIHRvIHVzZSBmb3IgdGhlIHRyYWNrIElEIG9mIHRoZSBuZXh0IHRyYWNrIHRvIGJlIGFkZGVkIHRvIHRoaXMgcHJlc2VudGF0aW9uXG5cbiAgICAgICAgcmV0dXJuIG12aGQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGtoZEJveCh0cmFrKSB7XG5cbiAgICAgICAgbGV0IHRraGQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd0a2hkJywgdHJhayk7XG5cbiAgICAgICAgdGtoZC52ZXJzaW9uID0gMTsgLy8gdmVyc2lvbiA9IDEgIGluIG9yZGVyIHRvIGhhdmUgNjRiaXRzIGR1cmF0aW9uIHZhbHVlXG4gICAgICAgIHRraGQuZmxhZ3MgPSAweDEgfCAvLyBUcmFja19lbmFibGVkICgweDAwMDAwMSk6IEluZGljYXRlcyB0aGF0IHRoZSB0cmFjayBpcyBlbmFibGVkXG4gICAgICAgICAgICAweDIgfCAvLyBUcmFja19pbl9tb3ZpZSAoMHgwMDAwMDIpOiAgSW5kaWNhdGVzIHRoYXQgdGhlIHRyYWNrIGlzIHVzZWQgaW4gdGhlIHByZXNlbnRhdGlvblxuICAgICAgICAgICAgMHg0OyAvLyBUcmFja19pbl9wcmV2aWV3ICgweDAwMDAwNCk6ICBJbmRpY2F0ZXMgdGhhdCB0aGUgdHJhY2sgaXMgdXNlZCB3aGVuIHByZXZpZXdpbmcgdGhlIHByZXNlbnRhdGlvblxuXG4gICAgICAgIHRraGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcbiAgICAgICAgdGtoZC5tb2RpZmljYXRpb25fdGltZSA9IDA7IC8vIHRoZSBtb3N0IHJlY2VudCB0aW1lIHRoZSBwcmVzZW50YXRpb24gd2FzIG1vZGlmaWVkID0+IGlnbm9yZSAoc2V0IHRvIDApXG4gICAgICAgIHRraGQudHJhY2tfSUQgPSB0cmFja0lkOyAvLyB1bmlxdWVseSBpZGVudGlmaWVzIHRoaXMgdHJhY2sgb3ZlciB0aGUgZW50aXJlIGxpZmUtdGltZSBvZiB0aGlzIHByZXNlbnRhdGlvblxuICAgICAgICB0a2hkLnJlc2VydmVkMSA9IDA7XG4gICAgICAgIHRraGQuZHVyYXRpb24gPSBNYXRoLnJvdW5kKHBlcmlvZC5kdXJhdGlvbiAqIHRpbWVzY2FsZSk7IC8vIHRoZSBkdXJhdGlvbiBvZiB0aGlzIHRyYWNrIChpbiB0aGUgdGltZXNjYWxlIGluZGljYXRlZCBpbiB0aGUgTW92aWUgSGVhZGVyIEJveCkgPT4gIHRha2UgZHVyYXRpb24gb2YgcGVyaW9kXG4gICAgICAgIHRraGQucmVzZXJ2ZWQyID0gWzB4MCwgMHgwXTtcbiAgICAgICAgdGtoZC5sYXllciA9IDA7IC8vIHNwZWNpZmllcyB0aGUgZnJvbnQtdG8tYmFjayBvcmRlcmluZyBvZiB2aWRlbyB0cmFja3M7IHRyYWNrcyB3aXRoIGxvd2VyIG51bWJlcnMgYXJlIGNsb3NlciB0byB0aGUgdmlld2VyID0+IDAgc2luY2Ugb25seSBvbmUgdmlkZW8gdHJhY2tcbiAgICAgICAgdGtoZC5hbHRlcm5hdGVfZ3JvdXAgPSAwOyAvLyBzcGVjaWZpZXMgYSBncm91cCBvciBjb2xsZWN0aW9uIG9mIHRyYWNrcyA9PiBpZ25vcmVcbiAgICAgICAgdGtoZC52b2x1bWUgPSAxLjA7IC8vICcxLjAnID0gZnVsbCB2b2x1bWVcbiAgICAgICAgdGtoZC5yZXNlcnZlZDMgPSAwO1xuICAgICAgICB0a2hkLm1hdHJpeCA9IFtcbiAgICAgICAgICAgIDEsIDAsIDAsIC8vIHByb3ZpZGVzIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4IGZvciB0aGUgdmlkZW87XG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxuICAgICAgICAgICAgMCwgMCwgMTYzODRcbiAgICAgICAgXTtcbiAgICAgICAgdGtoZC53aWR0aCA9IHJlcHJlc2VudGF0aW9uLndpZHRoOyAvLyB2aXN1YWwgcHJlc2VudGF0aW9uIHdpZHRoXG4gICAgICAgIHRraGQuaGVpZ2h0ID0gcmVwcmVzZW50YXRpb24uaGVpZ2h0OyAvLyB2aXN1YWwgcHJlc2VudGF0aW9uIGhlaWdodFxuXG4gICAgICAgIHJldHVybiB0a2hkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1kaGRCb3gobWRpYSkge1xuXG4gICAgICAgIGxldCBtZGhkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnbWRoZCcsIG1kaWEpO1xuXG4gICAgICAgIG1kaGQudmVyc2lvbiA9IDE7IC8vIHZlcnNpb24gPSAxICBpbiBvcmRlciB0byBoYXZlIDY0Yml0cyBkdXJhdGlvbiB2YWx1ZVxuXG4gICAgICAgIG1kaGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcbiAgICAgICAgbWRoZC5tb2RpZmljYXRpb25fdGltZSA9IDA7IC8vIHRoZSBtb3N0IHJlY2VudCB0aW1lIHRoZSBwcmVzZW50YXRpb24gd2FzIG1vZGlmaWVkID0+IGlnbm9yZSAoc2V0IHRvIDApXG4gICAgICAgIG1kaGQudGltZXNjYWxlID0gdGltZXNjYWxlOyAvLyB0aGUgdGltZS1zY2FsZSBmb3IgdGhlIGVudGlyZSBwcmVzZW50YXRpb25cbiAgICAgICAgbWRoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGR1cmF0aW9uIG9mIHRoaXMgbWVkaWEgKGluIHRoZSBzY2FsZSBvZiB0aGUgdGltZXNjYWxlKS4gSWYgdGhlIGR1cmF0aW9uIGNhbm5vdCBiZSBkZXRlcm1pbmVkIHRoZW4gZHVyYXRpb24gaXMgc2V0IHRvIGFsbCAxcy5cbiAgICAgICAgbWRoZC5sYW5ndWFnZSA9IGFkYXB0YXRpb25TZXQubGFuZyB8fCAndW5kJzsgLy8gZGVjbGFyZXMgdGhlIGxhbmd1YWdlIGNvZGUgZm9yIHRoaXMgbWVkaWEgKHNlZSBnZXRMYW5ndWFnZUNvZGUoKSlcbiAgICAgICAgbWRoZC5wcmVfZGVmaW5lZCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIG1kaGQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGRsckJveChtZGlhKSB7XG5cbiAgICAgICAgbGV0IGhkbHIgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdoZGxyJywgbWRpYSk7XG5cbiAgICAgICAgaGRsci5wcmVfZGVmaW5lZCA9IDA7XG4gICAgICAgIHN3aXRjaCAoYWRhcHRhdGlvblNldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5WSURFTzpcbiAgICAgICAgICAgICAgICBoZGxyLmhhbmRsZXJfdHlwZSA9ICd2aWRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFVRElPOlxuICAgICAgICAgICAgICAgIGhkbHIuaGFuZGxlcl90eXBlID0gJ3NvdW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBoZGxyLmhhbmRsZXJfdHlwZSA9ICdtZXRhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoZGxyLm5hbWUgPSByZXByZXNlbnRhdGlvbi5pZDtcbiAgICAgICAgaGRsci5yZXNlcnZlZCA9IFswLCAwLCAwXTtcblxuICAgICAgICByZXR1cm4gaGRscjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVWbWhkQm94KG1pbmYpIHtcblxuICAgICAgICBsZXQgdm1oZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3ZtaGQnLCBtaW5mKTtcblxuICAgICAgICB2bWhkLmZsYWdzID0gMTtcblxuICAgICAgICB2bWhkLmdyYXBoaWNzbW9kZSA9IDA7IC8vIHNwZWNpZmllcyBhIGNvbXBvc2l0aW9uIG1vZGUgZm9yIHRoaXMgdmlkZW8gdHJhY2ssIGZyb20gdGhlIGZvbGxvd2luZyBlbnVtZXJhdGVkIHNldCwgd2hpY2ggbWF5IGJlIGV4dGVuZGVkIGJ5IGRlcml2ZWQgc3BlY2lmaWNhdGlvbnM6IGNvcHkgPSAwIGNvcHkgb3ZlciB0aGUgZXhpc3RpbmcgaW1hZ2VcbiAgICAgICAgdm1oZC5vcGNvbG9yID0gWzAsIDAsIDBdOyAvLyBpcyBhIHNldCBvZiAzIGNvbG91ciB2YWx1ZXMgKHJlZCwgZ3JlZW4sIGJsdWUpIGF2YWlsYWJsZSBmb3IgdXNlIGJ5IGdyYXBoaWNzIG1vZGVzXG5cbiAgICAgICAgcmV0dXJuIHZtaGQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU21oZEJveChtaW5mKSB7XG5cbiAgICAgICAgbGV0IHNtaGQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdzbWhkJywgbWluZik7XG5cbiAgICAgICAgc21oZC5mbGFncyA9IDE7XG5cbiAgICAgICAgc21oZC5iYWxhbmNlID0gMDsgLy8gaXMgYSBmaXhlZC1wb2ludCA4LjggbnVtYmVyIHRoYXQgcGxhY2VzIG1vbm8gYXVkaW8gdHJhY2tzIGluIGEgc3RlcmVvIHNwYWNlOyAwIGlzIGNlbnRyZSAodGhlIG5vcm1hbCB2YWx1ZSk7IGZ1bGwgbGVmdCBpcyAtMS4wIGFuZCBmdWxsIHJpZ2h0IGlzIDEuMC5cbiAgICAgICAgc21oZC5yZXNlcnZlZCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHNtaGQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRHJlZkJveChkaW5mKSB7XG5cbiAgICAgICAgbGV0IGRyZWYgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdkcmVmJywgZGluZik7XG5cbiAgICAgICAgZHJlZi5lbnRyeV9jb3VudCA9IDE7XG4gICAgICAgIGRyZWYuZW50cmllcyA9IFtdO1xuXG4gICAgICAgIGxldCB1cmwgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd1cmwgJywgZHJlZiwgZmFsc2UpO1xuICAgICAgICB1cmwubG9jYXRpb24gPSAnJztcbiAgICAgICAgdXJsLmZsYWdzID0gMTtcblxuICAgICAgICBkcmVmLmVudHJpZXMucHVzaCh1cmwpO1xuXG4gICAgICAgIHJldHVybiBkcmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0c2RCb3goc3RibCkge1xuXG4gICAgICAgIGxldCBzdHNkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzZCcsIHN0YmwpO1xuXG4gICAgICAgIHN0c2QuZW50cmllcyA9IFtdO1xuICAgICAgICBzd2l0Y2ggKGFkYXB0YXRpb25TZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuVklERU86XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5BVURJTzpcbiAgICAgICAgICAgICAgICBzdHNkLmVudHJpZXMucHVzaChjcmVhdGVTYW1wbGVFbnRyeShzdHNkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RzZC5lbnRyeV9jb3VudCA9IHN0c2QuZW50cmllcy5sZW5ndGg7IC8vIGlzIGFuIGludGVnZXIgdGhhdCBjb3VudHMgdGhlIGFjdHVhbCBlbnRyaWVzXG4gICAgICAgIHJldHVybiBzdHNkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhbXBsZUVudHJ5KHN0c2QpIHtcbiAgICAgICAgbGV0IGNvZGVjID0gcmVwcmVzZW50YXRpb24uY29kZWNzLnN1YnN0cmluZygwLCByZXByZXNlbnRhdGlvbi5jb2RlY3MuaW5kZXhPZignLicpKTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XG4gICAgICAgICAgICBjYXNlICdhdmMxJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQVZDVmlzdWFsU2FtcGxlRW50cnkoc3RzZCwgY29kZWMpO1xuICAgICAgICAgICAgY2FzZSAnbXA0YSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1QNEF1ZGlvU2FtcGxlRW50cnkoc3RzZCwgY29kZWMpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdVbnN1cHBvcnRlZCBjb2RlYycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbnN1cHBvcnRlZCBjb2RlYycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVjOiBjb2RlY1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFWQ1Zpc3VhbFNhbXBsZUVudHJ5KHN0c2QsIGNvZGVjKSB7XG4gICAgICAgIGxldCBhdmMxO1xuXG4gICAgICAgIGlmIChjb250ZW50UHJvdGVjdGlvbikge1xuICAgICAgICAgICAgYXZjMSA9IElTT0JveGVyLmNyZWF0ZUJveCgnZW5jdicsIHN0c2QsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF2YzEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2F2YzEnLCBzdHNkLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTYW1wbGVFbnRyeSBmaWVsZHNcbiAgICAgICAgYXZjMS5yZXNlcnZlZDEgPSBbMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MF07XG4gICAgICAgIGF2YzEuZGF0YV9yZWZlcmVuY2VfaW5kZXggPSAxO1xuXG4gICAgICAgIC8vIFZpc3VhbFNhbXBsZUVudHJ5IGZpZWxkc1xuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMSA9IDA7XG4gICAgICAgIGF2YzEucmVzZXJ2ZWQyID0gMDtcbiAgICAgICAgYXZjMS5wcmVfZGVmaW5lZDIgPSBbMCwgMCwgMF07XG4gICAgICAgIGF2YzEuaGVpZ2h0ID0gcmVwcmVzZW50YXRpb24uaGVpZ2h0O1xuICAgICAgICBhdmMxLndpZHRoID0gcmVwcmVzZW50YXRpb24ud2lkdGg7XG4gICAgICAgIGF2YzEuaG9yaXpyZXNvbHV0aW9uID0gNzI7IC8vIDcyIGRwaVxuICAgICAgICBhdmMxLnZlcnRyZXNvbHV0aW9uID0gNzI7IC8vIDcyIGRwaVxuICAgICAgICBhdmMxLnJlc2VydmVkMyA9IDA7XG4gICAgICAgIGF2YzEuZnJhbWVfY291bnQgPSAxOyAvLyAxIGNvbXByZXNzZWQgdmlkZW8gZnJhbWUgcGVyIHNhbXBsZVxuICAgICAgICBhdmMxLmNvbXByZXNzb3JuYW1lID0gW1xuICAgICAgICAgICAgMHgwQSwgMHg0MSwgMHg1NiwgMHg0MywgMHgyMCwgMHg0MywgMHg2RiwgMHg2NCwgLy8gPSAnQVZDIENvZGluZyc7XG4gICAgICAgICAgICAweDY5LCAweDZFLCAweDY3LCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDBcbiAgICAgICAgXTtcbiAgICAgICAgYXZjMS5kZXB0aCA9IDB4MDAxODsgLy8gMHgwMDE4IOKAkyBpbWFnZXMgYXJlIGluIGNvbG91ciB3aXRoIG5vIGFscGhhLlxuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMyA9IDY1NTM1O1xuICAgICAgICBhdmMxLmNvbmZpZyA9IGNyZWF0ZUFWQzFDb25maWd1cmF0aW9uUmVjb3JkKCk7XG4gICAgICAgIGlmIChjb250ZW50UHJvdGVjdGlvbikge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgUHJvdGVjdGlvbiBTY2hlbWUgSW5mbyBCb3hcbiAgICAgICAgICAgIGxldCBzaW5mID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzaW5mJywgYXZjMSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIE9yaWdpbmFsIEZvcm1hdCBCb3ggPT4gaW5kaWNhdGUgY29kZWMgdHlwZSBvZiB0aGUgZW5jcnlwdGVkIGNvbnRlbnRcbiAgICAgICAgICAgIGNyZWF0ZU9yaWdpbmFsRm9ybWF0Qm94KHNpbmYsIGNvZGVjKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIFR5cGUgYm94XG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVUeXBlQm94KHNpbmYpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBTY2hlbWUgSW5mb3JtYXRpb24gQm94XG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVJbmZvcm1hdGlvbkJveChzaW5mKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdmMxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFWQzFDb25maWd1cmF0aW9uUmVjb3JkKCkge1xuXG4gICAgICAgIGxldCBhdmNDID0gbnVsbDtcbiAgICAgICAgbGV0IGF2Y0NMZW5ndGggPSAxNTsgLy8gbGVuZ3RoID0gMTUgYnkgZGVmYXVsdCAoMCBTUFMgYW5kIDAgUFBTKVxuXG4gICAgICAgIC8vIEZpcnN0IGdldCBhbGwgU1BTIGFuZCBQUFMgZnJvbSBjb2RlY1ByaXZhdGVEYXRhXG4gICAgICAgIGxldCBzcHMgPSBbXTtcbiAgICAgICAgbGV0IHBwcyA9IFtdO1xuICAgICAgICBsZXQgQVZDUHJvZmlsZUluZGljYXRpb24gPSAwO1xuICAgICAgICBsZXQgQVZDTGV2ZWxJbmRpY2F0aW9uID0gMDtcbiAgICAgICAgbGV0IHByb2ZpbGVfY29tcGF0aWJpbGl0eSA9IDA7XG5cblxuICAgICAgICBsZXQgbmFsdXMgPSByZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhLnNwbGl0KCcwMDAwMDAwMScpLnNsaWNlKDEpO1xuICAgICAgICBsZXQgbmFsdUJ5dGVzLCBuYWx1VHlwZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYWx1Qnl0ZXMgPSBoZXhTdHJpbmd0b0J1ZmZlcihuYWx1c1tpXSk7XG5cbiAgICAgICAgICAgIG5hbHVUeXBlID0gbmFsdUJ5dGVzWzBdICYgMHgxRjtcblxuICAgICAgICAgICAgc3dpdGNoIChuYWx1VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTkFMVVRZUEVfU1BTOlxuICAgICAgICAgICAgICAgICAgICBzcHMucHVzaChuYWx1Qnl0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBhdmNDTGVuZ3RoICs9IG5hbHVCeXRlcy5sZW5ndGggKyAyOyAvLyAyID0gc2VxdWVuY2VQYXJhbWV0ZXJTZXRMZW5ndGggZmllbGQgbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTkFMVVRZUEVfUFBTOlxuICAgICAgICAgICAgICAgICAgICBwcHMucHVzaChuYWx1Qnl0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBhdmNDTGVuZ3RoICs9IG5hbHVCeXRlcy5sZW5ndGggKyAyOyAvLyAyID0gcGljdHVyZVBhcmFtZXRlclNldExlbmd0aCBmaWVsZCBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgcHJvZmlsZSBhbmQgbGV2ZWwgZnJvbSBTUFNcbiAgICAgICAgaWYgKHNwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBBVkNQcm9maWxlSW5kaWNhdGlvbiA9IHNwc1swXVsxXTtcbiAgICAgICAgICAgIHByb2ZpbGVfY29tcGF0aWJpbGl0eSA9IHNwc1swXVsyXTtcbiAgICAgICAgICAgIEFWQ0xldmVsSW5kaWNhdGlvbiA9IHNwc1swXVszXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIGF2Y0MgYnVmZmVyXG4gICAgICAgIGF2Y0MgPSBuZXcgVWludDhBcnJheShhdmNDTGVuZ3RoKTtcblxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxlbmd0aFxuICAgICAgICBhdmNDW2krK10gPSAoYXZjQ0xlbmd0aCAmIDB4RkYwMDAwMDApID4+IDI0O1xuICAgICAgICBhdmNDW2krK10gPSAoYXZjQ0xlbmd0aCAmIDB4MDBGRjAwMDApID4+IDE2O1xuICAgICAgICBhdmNDW2krK10gPSAoYXZjQ0xlbmd0aCAmIDB4MDAwMEZGMDApID4+IDg7XG4gICAgICAgIGF2Y0NbaSsrXSA9IChhdmNDTGVuZ3RoICYgMHgwMDAwMDBGRik7XG4gICAgICAgIGF2Y0Muc2V0KFsweDYxLCAweDc2LCAweDYzLCAweDQzXSwgaSk7IC8vIHR5cGUgPSAnYXZjQydcbiAgICAgICAgaSArPSA0O1xuICAgICAgICBhdmNDW2krK10gPSAxOyAvLyBjb25maWd1cmF0aW9uVmVyc2lvbiA9IDFcbiAgICAgICAgYXZjQ1tpKytdID0gQVZDUHJvZmlsZUluZGljYXRpb247XG4gICAgICAgIGF2Y0NbaSsrXSA9IHByb2ZpbGVfY29tcGF0aWJpbGl0eTtcbiAgICAgICAgYXZjQ1tpKytdID0gQVZDTGV2ZWxJbmRpY2F0aW9uO1xuICAgICAgICBhdmNDW2krK10gPSAweEZGOyAvLyAnMTExMTEnICsgbGVuZ3RoU2l6ZU1pbnVzT25lID0gM1xuICAgICAgICBhdmNDW2krK10gPSAweEUwIHwgc3BzLmxlbmd0aDsgLy8gJzExMScgKyBudW1PZlNlcXVlbmNlUGFyYW1ldGVyU2V0c1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHNwcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgYXZjQ1tpKytdID0gKHNwc1tuXS5sZW5ndGggJiAweEZGMDApID4+IDg7XG4gICAgICAgICAgICBhdmNDW2krK10gPSAoc3BzW25dLmxlbmd0aCAmIDB4MDBGRik7XG4gICAgICAgICAgICBhdmNDLnNldChzcHNbbl0sIGkpO1xuICAgICAgICAgICAgaSArPSBzcHNbbl0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGF2Y0NbaSsrXSA9IHBwcy5sZW5ndGg7IC8vIG51bU9mUGljdHVyZVBhcmFtZXRlclNldHNcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBwcHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGF2Y0NbaSsrXSA9IChwcHNbbl0ubGVuZ3RoICYgMHhGRjAwKSA+PiA4O1xuICAgICAgICAgICAgYXZjQ1tpKytdID0gKHBwc1tuXS5sZW5ndGggJiAweDAwRkYpO1xuICAgICAgICAgICAgYXZjQy5zZXQocHBzW25dLCBpKTtcbiAgICAgICAgICAgIGkgKz0gcHBzW25dLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdmNDO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1QNEF1ZGlvU2FtcGxlRW50cnkoc3RzZCwgY29kZWMpIHtcbiAgICAgICAgbGV0IG1wNGE7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgICAgICAgICBtcDRhID0gSVNPQm94ZXIuY3JlYXRlQm94KCdlbmNhJywgc3RzZCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXA0YSA9IElTT0JveGVyLmNyZWF0ZUJveCgnbXA0YScsIHN0c2QsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhbXBsZUVudHJ5IGZpZWxkc1xuICAgICAgICBtcDRhLnJlc2VydmVkMSA9IFsweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwXTtcbiAgICAgICAgbXA0YS5kYXRhX3JlZmVyZW5jZV9pbmRleCA9IDE7XG5cbiAgICAgICAgLy8gQXVkaW9TYW1wbGVFbnRyeSBmaWVsZHNcbiAgICAgICAgbXA0YS5yZXNlcnZlZDIgPSBbMHgwLCAweDBdO1xuICAgICAgICBtcDRhLmNoYW5uZWxjb3VudCA9IHJlcHJlc2VudGF0aW9uLmF1ZGlvQ2hhbm5lbHM7XG4gICAgICAgIG1wNGEuc2FtcGxlc2l6ZSA9IDE2O1xuICAgICAgICBtcDRhLnByZV9kZWZpbmVkID0gMDtcbiAgICAgICAgbXA0YS5yZXNlcnZlZF8zID0gMDtcbiAgICAgICAgbXA0YS5zYW1wbGVyYXRlID0gcmVwcmVzZW50YXRpb24uYXVkaW9TYW1wbGluZ1JhdGUgPDwgMTY7XG5cbiAgICAgICAgbXA0YS5lc2RzID0gY3JlYXRlTVBFRzRBQUNFU0Rlc2NyaXB0b3IoKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3RlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFByb3RlY3Rpb24gU2NoZW1lIEluZm8gQm94XG4gICAgICAgICAgICBsZXQgc2luZiA9IElTT0JveGVyLmNyZWF0ZUJveCgnc2luZicsIG1wNGEpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBPcmlnaW5hbCBGb3JtYXQgQm94ID0+IGluZGljYXRlIGNvZGVjIHR5cGUgb2YgdGhlIGVuY3J5cHRlZCBjb250ZW50XG4gICAgICAgICAgICBjcmVhdGVPcmlnaW5hbEZvcm1hdEJveChzaW5mLCBjb2RlYyk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFNjaGVtZSBUeXBlIGJveFxuICAgICAgICAgICAgY3JlYXRlU2NoZW1lVHlwZUJveChzaW5mKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIEluZm9ybWF0aW9uIEJveFxuICAgICAgICAgICAgY3JlYXRlU2NoZW1lSW5mb3JtYXRpb25Cb3goc2luZik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbXA0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNUEVHNEFBQ0VTRGVzY3JpcHRvcigpIHtcblxuICAgICAgICAvLyBBdWRpb1NwZWNpZmljQ29uZmlnIChzZWUgSVNPL0lFQyAxNDQ5Ni0zLCBzdWJwYXJ0IDEpID0+IGNvcnJlc3BvbmRzIHRvIGhleCBieXRlcyBjb250YWluZWQgaW4gJ2NvZGVjUHJpdmF0ZURhdGEnIGZpZWxkXG4gICAgICAgIGxldCBhdWRpb1NwZWNpZmljQ29uZmlnID0gaGV4U3RyaW5ndG9CdWZmZXIocmVwcmVzZW50YXRpb24uY29kZWNQcml2YXRlRGF0YSk7XG5cbiAgICAgICAgLy8gRVNEUyBsZW5ndGggPSBlc2RzIGJveCBoZWFkZXIgbGVuZ3RoICg9IDEyKSArXG4gICAgICAgIC8vICAgICAgICAgICAgICAgRVNfRGVzY3JpcHRvciBoZWFkZXIgbGVuZ3RoICg9IDUpICtcbiAgICAgICAgLy8gICAgICAgICAgICAgICBEZWNvZGVyQ29uZmlnRGVzY3JpcHRvciBoZWFkZXIgbGVuZ3RoICg9IDE1KSArXG4gICAgICAgIC8vICAgICAgICAgICAgICAgZGVjb2RlclNwZWNpZmljSW5mbyBoZWFkZXIgbGVuZ3RoICg9IDIpICtcbiAgICAgICAgLy8gICAgICAgICAgICAgICBBdWRpb1NwZWNpZmljQ29uZmlnIGxlbmd0aCAoPSBjb2RlY1ByaXZhdGVEYXRhIGxlbmd0aClcbiAgICAgICAgbGV0IGVzZHNMZW5ndGggPSAzNCArIGF1ZGlvU3BlY2lmaWNDb25maWcubGVuZ3RoO1xuICAgICAgICBsZXQgZXNkcyA9IG5ldyBVaW50OEFycmF5KGVzZHNMZW5ndGgpO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gZXNkcyBib3hcbiAgICAgICAgZXNkc1tpKytdID0gKGVzZHNMZW5ndGggJiAweEZGMDAwMDAwKSA+PiAyNDsgLy8gZXNkcyBib3ggbGVuZ3RoXG4gICAgICAgIGVzZHNbaSsrXSA9IChlc2RzTGVuZ3RoICYgMHgwMEZGMDAwMCkgPj4gMTY7IC8vICcnXG4gICAgICAgIGVzZHNbaSsrXSA9IChlc2RzTGVuZ3RoICYgMHgwMDAwRkYwMCkgPj4gODsgLy8gJydcbiAgICAgICAgZXNkc1tpKytdID0gKGVzZHNMZW5ndGggJiAweDAwMDAwMEZGKTsgLy8gJydcbiAgICAgICAgZXNkcy5zZXQoWzB4NjUsIDB4NzMsIDB4NjQsIDB4NzNdLCBpKTsgLy8gdHlwZSA9ICdlc2RzJ1xuICAgICAgICBpICs9IDQ7XG4gICAgICAgIGVzZHMuc2V0KFswLCAwLCAwLCAwXSwgaSk7IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDBcbiAgICAgICAgaSArPSA0O1xuICAgICAgICAvLyBFU19EZXNjcmlwdG9yIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcbiAgICAgICAgZXNkc1tpKytdID0gMHgwMzsgLy8gdGFnID0gMHgwMyAoRVNfRGVzY3JUYWcpXG4gICAgICAgIGVzZHNbaSsrXSA9IDIwICsgYXVkaW9TcGVjaWZpY0NvbmZpZy5sZW5ndGg7IC8vIHNpemVcbiAgICAgICAgZXNkc1tpKytdID0gKHRyYWNrSWQgJiAweEZGMDApID4+IDg7IC8vIEVTX0lEID0gdHJhY2tfaWRcbiAgICAgICAgZXNkc1tpKytdID0gKHRyYWNrSWQgJiAweDAwRkYpOyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAwOyAvLyBmbGFncyBhbmQgc3RyZWFtUHJpb3JpdHlcblxuICAgICAgICAvLyBEZWNvZGVyQ29uZmlnRGVzY3JpcHRvciAoc2VlIElTTy9JRUMgMTQ0OTYtMSAoU3lzdGVtcykpXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4MDQ7IC8vIHRhZyA9IDB4MDQgKERlY29kZXJDb25maWdEZXNjclRhZylcbiAgICAgICAgZXNkc1tpKytdID0gMTUgKyBhdWRpb1NwZWNpZmljQ29uZmlnLmxlbmd0aDsgLy8gc2l6ZVxuICAgICAgICBlc2RzW2krK10gPSAweDQwOyAvLyBvYmplY3RUeXBlSW5kaWNhdGlvbiA9IDB4NDAgKE1QRUctNCBBQUMpXG4gICAgICAgIGVzZHNbaV0gPSAweDA1IDw8IDI7IC8vIHN0cmVhbVR5cGUgPSAweDA1IChBdWRpb3N0cmVhbSlcbiAgICAgICAgZXNkc1tpXSB8PSAwIDw8IDE7IC8vIHVwU3RyZWFtID0gMFxuICAgICAgICBlc2RzW2krK10gfD0gMTsgLy8gcmVzZXJ2ZWQgPSAxXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4RkY7IC8vIGJ1ZmZlcnNpemVEQiA9IHVuZGVmaW5lZFxuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHhGRjAwMDAwMCkgPj4gMjQ7IC8vIG1heEJpdHJhdGVcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHgwMDAwRkYwMCkgPj4gODsgLy8gJydcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHhGRjAwMDAwMCkgPj4gMjQ7IC8vIGF2Z2JpdHJhdGVcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHgwMDAwRkYwMCkgPj4gODsgLy8gJydcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xuXG4gICAgICAgIC8vIERlY29kZXJTcGVjaWZpY0luZm8gKHNlZSBJU08vSUVDIDE0NDk2LTEgKFN5c3RlbXMpKVxuICAgICAgICBlc2RzW2krK10gPSAweDA1OyAvLyB0YWcgPSAweDA1IChEZWNTcGVjaWZpY0luZm9UYWcpXG4gICAgICAgIGVzZHNbaSsrXSA9IGF1ZGlvU3BlY2lmaWNDb25maWcubGVuZ3RoOyAvLyBzaXplXG4gICAgICAgIGVzZHMuc2V0KGF1ZGlvU3BlY2lmaWNDb25maWcsIGkpOyAvLyBBdWRpb1NwZWNpZmljQ29uZmlnIGJ5dGVzXG5cbiAgICAgICAgcmV0dXJuIGVzZHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JpZ2luYWxGb3JtYXRCb3goc2luZiwgY29kZWMpIHtcbiAgICAgICAgbGV0IGZybWEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2ZybWEnLCBzaW5mKTtcbiAgICAgICAgZnJtYS5kYXRhX2Zvcm1hdCA9IHN0cmluZ1RvQ2hhckNvZGUoY29kZWMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNjaGVtZVR5cGVCb3goc2luZikge1xuICAgICAgICBsZXQgc2NobSA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3NjaG0nLCBzaW5mKTtcblxuICAgICAgICBzY2htLmZsYWdzID0gMDtcbiAgICAgICAgc2NobS52ZXJzaW9uID0gMDtcbiAgICAgICAgc2NobS5zY2hlbWVfdHlwZSA9IDB4NjM2NTZFNjM7IC8vICdjZW5jJyA9PiBjb21tb24gZW5jcnlwdGlvblxuICAgICAgICBzY2htLnNjaGVtZV92ZXJzaW9uID0gMHgwMDAxMDAwMDsgLy8gdmVyc2lvbiBzZXQgdG8gMHgwMDAxMDAwMCAoTWFqb3IgdmVyc2lvbiAxLCBNaW5vciB2ZXJzaW9uIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2NoZW1lSW5mb3JtYXRpb25Cb3goc2luZikge1xuICAgICAgICBsZXQgc2NoaSA9IElTT0JveGVyLmNyZWF0ZUJveCgnc2NoaScsIHNpbmYpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFRyYWNrIEVuY3J5cHRpb24gQm94XG4gICAgICAgIGNyZWF0ZVRyYWNrRW5jcnlwdGlvbkJveChzY2hpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm90ZWN0aW9uU3lzdGVtU3BlY2lmaWNIZWFkZXJCb3gobW9vdiwga2V5U3lzdGVtcykge1xuICAgICAgICBsZXQgcHNzaF9ieXRlcztcbiAgICAgICAgbGV0IHBzc2g7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgcGFyc2VkQnVmZmVyO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlTeXN0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBwc3NoX2J5dGVzID0ga2V5U3lzdGVtc1tpXS5pbml0RGF0YTtcbiAgICAgICAgICAgIHBhcnNlZEJ1ZmZlciA9IElTT0JveGVyLnBhcnNlQnVmZmVyKHBzc2hfYnl0ZXMpO1xuICAgICAgICAgICAgcHNzaCA9IHBhcnNlZEJ1ZmZlci5mZXRjaCgncHNzaCcpO1xuICAgICAgICAgICAgaWYgKHBzc2gpIHtcbiAgICAgICAgICAgICAgICBJU09Cb3hlci5VdGlscy5hcHBlbmRCb3gobW9vdiwgcHNzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUcmFja0VuY3J5cHRpb25Cb3goc2NoaSkge1xuICAgICAgICBsZXQgdGVuYyA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RlbmMnLCBzY2hpKTtcblxuICAgICAgICB0ZW5jLmZsYWdzID0gMDtcbiAgICAgICAgdGVuYy52ZXJzaW9uID0gMDtcblxuICAgICAgICB0ZW5jLmRlZmF1bHRfSXNFbmNyeXB0ZWQgPSAweDE7XG4gICAgICAgIHRlbmMuZGVmYXVsdF9JVl9zaXplID0gODtcbiAgICAgICAgdGVuYy5kZWZhdWx0X0tJRCA9IChjb250ZW50UHJvdGVjdGlvbiAmJiAoY29udGVudFByb3RlY3Rpb24ubGVuZ3RoKSA+IDAgJiYgY29udGVudFByb3RlY3Rpb25bMF1bJ2NlbmM6ZGVmYXVsdF9LSUQnXSkgP1xuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb25bMF1bJ2NlbmM6ZGVmYXVsdF9LSUQnXSA6IFsweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRyZXhCb3gobW9vdikge1xuXG4gICAgICAgIGxldCB0cmV4ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndHJleCcsIG1vb3YpO1xuXG4gICAgICAgIHRyZXgudHJhY2tfSUQgPSB0cmFja0lkO1xuICAgICAgICB0cmV4LmRlZmF1bHRfc2FtcGxlX2Rlc2NyaXB0aW9uX2luZGV4ID0gMTtcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9kdXJhdGlvbiA9IDA7XG4gICAgICAgIHRyZXguZGVmYXVsdF9zYW1wbGVfc2l6ZSA9IDA7XG4gICAgICAgIHRyZXguZGVmYXVsdF9zYW1wbGVfZmxhZ3MgPSAwO1xuXG4gICAgICAgIHJldHVybiB0cmV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhleFN0cmluZ3RvQnVmZmVyKHN0cikge1xuICAgICAgICBsZXQgYnVmID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCAvIDIpO1xuICAgICAgICBsZXQgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAvIDI7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVmW2ldID0gcGFyc2VJbnQoJycgKyBzdHJbaSAqIDJdICsgc3RyW2kgKiAyICsgMV0sIDE2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ1RvQ2hhckNvZGUoc3RyKSB7XG4gICAgICAgIGxldCBjb2RlID0gMDtcbiAgICAgICAgbGV0IGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29kZSB8PSBzdHIuY2hhckNvZGVBdChpKSA8PCAoKHN0ci5sZW5ndGggLSBpIC0gMSkgKiA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1vb3YocmVwKSB7XG4gICAgICAgIGlmICghcmVwIHx8ICFyZXAuYWRhcHRhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzb0ZpbGUsXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcjtcblxuICAgICAgICByZXByZXNlbnRhdGlvbiA9IHJlcDtcbiAgICAgICAgYWRhcHRhdGlvblNldCA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb247XG5cbiAgICAgICAgcGVyaW9kID0gYWRhcHRhdGlvblNldC5wZXJpb2Q7XG4gICAgICAgIHRyYWNrSWQgPSBhZGFwdGF0aW9uU2V0LmluZGV4ICsgMTtcbiAgICAgICAgY29udGVudFByb3RlY3Rpb24gPSBwZXJpb2QubXBkLm1hbmlmZXN0LlBlcmlvZF9hc0FycmF5W3BlcmlvZC5pbmRleF0uQWRhcHRhdGlvblNldF9hc0FycmF5W2FkYXB0YXRpb25TZXQuaW5kZXhdLkNvbnRlbnRQcm90ZWN0aW9uO1xuXG4gICAgICAgIHRpbWVzY2FsZSA9IHBlcmlvZC5tcGQubWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbYWRhcHRhdGlvblNldC5pbmRleF0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcblxuICAgICAgICBpc29GaWxlID0gSVNPQm94ZXIuY3JlYXRlRmlsZSgpO1xuICAgICAgICBjcmVhdGVGdHlwQm94KGlzb0ZpbGUpO1xuICAgICAgICBjcmVhdGVNb292Qm94KGlzb0ZpbGUpO1xuXG4gICAgICAgIGFycmF5QnVmZmVyID0gaXNvRmlsZS53cml0ZSgpO1xuXG4gICAgICAgIHJldHVybiBhcnJheUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgZ2VuZXJhdGVNb292OiBnZW5lcmF0ZU1vb3ZcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi8iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgTVNTRnJhZ21lbnRNb29mUHJvY2Vzc29yIGZyb20gJy4vTXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yJztcbmltcG9ydCBNU1NGcmFnbWVudE1vb3ZQcm9jZXNzb3IgZnJvbSAnLi9Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3InO1xuaW1wb3J0IE1zc0V2ZW50cyBmcm9tICcuL01zc0V2ZW50cyc7XG5cblxuLy8gQWRkIHNwZWNpZmljIGJveCBwcm9jZXNzb3JzIG5vdCBwcm92aWRlZCBieSBjb2RlbS1pc29ib3hlciBsaWJyYXJ5XG5cbmZ1bmN0aW9uIGFycmF5RXF1YWwoYXJyMSwgYXJyMikge1xuICAgIHJldHVybiAoYXJyMS5sZW5ndGggPT09IGFycjIubGVuZ3RoKSAmJiBhcnIxLmV2ZXJ5KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gYXJyMltpbmRleF07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhaW9Qcm9jZXNzb3IoKSB7XG4gICAgdGhpcy5fcHJvY0Z1bGxCb3goKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlJywgJ3VpbnQnLCAzMik7XG4gICAgICAgIHRoaXMuX3Byb2NGaWVsZCgnYXV4X2luZm9fdHlwZV9wYXJhbWV0ZXInLCAndWludCcsIDMyKTtcbiAgICB9XG4gICAgdGhpcy5fcHJvY0ZpZWxkKCdlbnRyeV9jb3VudCcsICd1aW50JywgMzIpO1xuICAgIHRoaXMuX3Byb2NGaWVsZEFycmF5KCdvZmZzZXQnLCB0aGlzLmVudHJ5X2NvdW50LCAndWludCcsICh0aGlzLnZlcnNpb24gPT09IDEpID8gNjQgOiAzMik7XG59XG5cbmZ1bmN0aW9uIHNhaXpQcm9jZXNzb3IoKSB7XG4gICAgdGhpcy5fcHJvY0Z1bGxCb3goKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlJywgJ3VpbnQnLCAzMik7XG4gICAgICAgIHRoaXMuX3Byb2NGaWVsZCgnYXV4X2luZm9fdHlwZV9wYXJhbWV0ZXInLCAndWludCcsIDMyKTtcbiAgICB9XG4gICAgdGhpcy5fcHJvY0ZpZWxkKCdkZWZhdWx0X3NhbXBsZV9pbmZvX3NpemUnLCAndWludCcsIDgpO1xuICAgIHRoaXMuX3Byb2NGaWVsZCgnc2FtcGxlX2NvdW50JywgJ3VpbnQnLCAzMik7XG4gICAgaWYgKHRoaXMuZGVmYXVsdF9zYW1wbGVfaW5mb19zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb2NGaWVsZEFycmF5KCdzYW1wbGVfaW5mb19zaXplJywgdGhpcy5zYW1wbGVfY291bnQsICd1aW50JywgOCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZW5jUHJvY2Vzc29yKCkge1xuICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XG4gICAgdGhpcy5fcHJvY0ZpZWxkKCdzYW1wbGVfY291bnQnLCAndWludCcsIDMyKTtcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdJVl9zaXplJywgJ3VpbnQnLCA4KTtcbiAgICB9XG4gICAgdGhpcy5fcHJvY0VudHJpZXMoJ2VudHJ5JywgdGhpcy5zYW1wbGVfY291bnQsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ0luaXRpYWxpemF0aW9uVmVjdG9yJywgJ2RhdGEnLCA4KTtcbiAgICAgICAgaWYgKHRoaXMuZmxhZ3MgJiAyKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ051bWJlck9mRW50cmllcycsICd1aW50JywgMTYpO1xuICAgICAgICAgICAgdGhpcy5fcHJvY1N1YkVudHJpZXMoZW50cnksICdjbGVhckFuZENyeXB0ZWREYXRhJywgZW50cnkuTnVtYmVyT2ZFbnRyaWVzLCBmdW5jdGlvbiAoY2xlYXJBbmRDcnlwdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2NFbnRyeUZpZWxkKGNsZWFyQW5kQ3J5cHRlZERhdGEsICdCeXRlc09mQ2xlYXJEYXRhJywgJ3VpbnQnLCAxNik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoY2xlYXJBbmRDcnlwdGVkRGF0YSwgJ0J5dGVzT2ZFbmNyeXB0ZWREYXRhJywgJ3VpbnQnLCAzMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1dWlkUHJvY2Vzc29yKCkge1xuICAgIGxldCB0ZnhkVXNlclR5cGUgPSBbMHg2RCwgMHgxRCwgMHg5QiwgMHgwNSwgMHg0MiwgMHhENSwgMHg0NCwgMHhFNiwgMHg4MCwgMHhFMiwgMHgxNCwgMHgxRCwgMHhBRiwgMHhGNywgMHg1NywgMHhCMl07XG4gICAgbGV0IHRmcmZVc2VyVHlwZSA9IFsweEQ0LCAweDgwLCAweDdFLCAweEYyLCAweENBLCAweDM5LCAweDQ2LCAweDk1LCAweDhFLCAweDU0LCAweDI2LCAweENCLCAweDlFLCAweDQ2LCAweEE3LCAweDlGXTtcbiAgICBsZXQgc2VwaWZmVXNlclR5cGUgPSBbMHhBMiwgMHgzOSwgMHg0RiwgMHg1MiwgMHg1QSwgMHg5QiwgMHg0ZiwgMHgxNCwgMHhBMiwgMHg0NCwgMHg2QywgMHg0MiwgMHg3QywgMHg2NCwgMHg4RCwgMHhGNF07XG5cbiAgICBpZiAoYXJyYXlFcXVhbCh0aGlzLnVzZXJ0eXBlLCB0ZnhkVXNlclR5cGUpKSB7XG4gICAgICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XG4gICAgICAgIGlmICh0aGlzLl9wYXJzaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAndGZ4ZCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdmcmFnbWVudF9hYnNvbHV0ZV90aW1lJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2ZyYWdtZW50X2R1cmF0aW9uJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xuICAgIH1cblxuICAgIGlmIChhcnJheUVxdWFsKHRoaXMudXNlcnR5cGUsIHRmcmZVc2VyVHlwZSkpIHtcbiAgICAgICAgdGhpcy5fcHJvY0Z1bGxCb3goKTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcnNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd0ZnJmJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2ZyYWdtZW50X2NvdW50JywgJ3VpbnQnLCA4KTtcbiAgICAgICAgdGhpcy5fcHJvY0VudHJpZXMoJ2VudHJ5JywgdGhpcy5mcmFnbWVudF9jb3VudCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ2ZyYWdtZW50X2Fic29sdXRlX3RpbWUnLCAndWludCcsICh0aGlzLnZlcnNpb24gPT09IDEpID8gNjQgOiAzMik7XG4gICAgICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ2ZyYWdtZW50X2R1cmF0aW9uJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYXJyYXlFcXVhbCh0aGlzLnVzZXJ0eXBlLCBzZXBpZmZVc2VyVHlwZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BhcnNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdzZXBpZmYnO1xuICAgICAgICB9XG4gICAgICAgIHNlbmNQcm9jZXNzb3IuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE1zc0ZyYWdtZW50UHJvY2Vzc29yKGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGxldCBtZXRyaWNzTW9kZWwgPSBjb25maWcubWV0cmljc01vZGVsO1xuICAgIGxldCBwbGF5YmFja0NvbnRyb2xsZXIgPSBjb25maWcucGxheWJhY2tDb250cm9sbGVyO1xuICAgIGxldCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICBsZXQgcHJvdGVjdGlvbkNvbnRyb2xsZXIgPSBjb25maWcucHJvdGVjdGlvbkNvbnRyb2xsZXI7XG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XG4gICAgY29uc3QgbG9nID0gY29uZmlnLmxvZztcbiAgICBsZXQgaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCd1dWlkJywgdXVpZFByb2Nlc3Nvcik7XG4gICAgICAgIElTT0JveGVyLmFkZEJveFByb2Nlc3Nvcignc2FpbycsIHNhaW9Qcm9jZXNzb3IpO1xuICAgICAgICBJU09Cb3hlci5hZGRCb3hQcm9jZXNzb3IoJ3NhaXonLCBzYWl6UHJvY2Vzc29yKTtcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCdzZW5jJywgc2VuY1Byb2Nlc3Nvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNb292KHJlcCkge1xuICAgICAgICBsZXQgbXNzRnJhZ21lbnRNb292UHJvY2Vzc29yID0gTVNTRnJhZ21lbnRNb292UHJvY2Vzc29yKGNvbnRleHQpLmNyZWF0ZSh7cHJvdGVjdGlvbkNvbnRyb2xsZXI6IHByb3RlY3Rpb25Db250cm9sbGVyLCBjb25zdGFudHM6IGNvbmZpZy5jb25zdGFudHMsIElTT0JveGVyOiBjb25maWcuSVNPQm94ZXJ9KTtcbiAgICAgICAgcmV0dXJuIG1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvci5nZW5lcmF0ZU1vb3YocmVwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRnJhZ21lbnQoZSwgc3ApIHtcbiAgICAgICAgaWYgKCFlIHx8ICFlLnJlcXVlc3QgfHwgIWUucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZSBwYXJhbWV0ZXIgaXMgbWlzc2luZyBvciBtYWxmb3JtZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXF1ZXN0ID0gZS5yZXF1ZXN0O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdNZWRpYVNlZ21lbnQnKSB7XG5cbiAgICAgICAgICAgIC8vIGl0J3MgYSBNZWRpYVNlZ21lbnQsIGxldCdzIGNvbnZlcnQgZnJhZ21lbnRcbiAgICAgICAgICAgIGxldCBtc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IgPSBNU1NGcmFnbWVudE1vb2ZQcm9jZXNzb3IoY29udGV4dCkuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBtZXRyaWNzTW9kZWw6IG1ldHJpY3NNb2RlbCxcbiAgICAgICAgICAgICAgICBwbGF5YmFja0NvbnRyb2xsZXI6IHBsYXliYWNrQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBJU09Cb3hlcjogSVNPQm94ZXIsXG4gICAgICAgICAgICAgICAgbG9nOiBsb2csXG4gICAgICAgICAgICAgICAgZXJySGFuZGxlcjogY29uZmlnLmVyckhhbmRsZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yLmNvbnZlcnRGcmFnbWVudChlLCBzcCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdGcmFnbWVudEluZm9TZWdtZW50Jykge1xuXG4gICAgICAgICAgICAvLyBpdCdzIGEgRnJhZ21lbnRJbmZvLCBhc2sgcmVsYXRpdmUgZnJhZ21lbnQgaW5mbyBjb250cm9sbGVyIHRvIGhhbmRsZSBpdFxuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihNc3NFdmVudHMuRlJBR01FTlRfSU5GT19MT0FESU5HX0NPTVBMRVRFRCwge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mbzogZSxcbiAgICAgICAgICAgICAgICBzdHJlYW1Qcm9jZXNzb3I6IHNwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBzZW5kZXIgdmFsdWUgdG8gc3RvcCBldmVudCB0byBiZSBwcm9wYWdhdGVkIChmcmFnbWVudCBpbmZvIG11c3Qgbm90IGJlIGFkZGVkIHRvIGJ1ZmZlcilcbiAgICAgICAgICAgIGUuc2VuZGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBnZW5lcmF0ZU1vb3Y6IGdlbmVyYXRlTW9vdixcbiAgICAgICAgcHJvY2Vzc0ZyYWdtZW50OiBwcm9jZXNzRnJhZ21lbnRcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuTXNzRnJhZ21lbnRQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50UHJvY2Vzc29yJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50UHJvY2Vzc29yKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IERhdGFDaHVuayBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRGF0YUNodW5rJztcbmltcG9ydCBGcmFnbWVudFJlcXVlc3QgZnJvbSAnLi4vc3RyZWFtaW5nL3ZvL0ZyYWdtZW50UmVxdWVzdCc7XG5pbXBvcnQgTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlciBmcm9tICcuL01zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXInO1xuaW1wb3J0IE1zc0ZyYWdtZW50UHJvY2Vzc29yIGZyb20gJy4vTXNzRnJhZ21lbnRQcm9jZXNzb3InO1xuaW1wb3J0IE1zc1BhcnNlciBmcm9tICcuL3BhcnNlci9Nc3NQYXJzZXInO1xuXG5mdW5jdGlvbiBNc3NIYW5kbGVyKGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGxldCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICBjb25zdCBldmVudHMgPSBjb25maWcuZXZlbnRzO1xuICAgIGNvbnN0IGNvbnN0YW50cyA9IGNvbmZpZy5jb25zdGFudHM7XG4gICAgY29uc3QgaW5pdFNlZ21lbnRUeXBlID0gY29uZmlnLmluaXRTZWdtZW50VHlwZTtcbiAgICBsZXQgbWV0cmljc01vZGVsID0gY29uZmlnLm1ldHJpY3NNb2RlbDtcbiAgICBsZXQgcGxheWJhY2tDb250cm9sbGVyID0gY29uZmlnLnBsYXliYWNrQ29udHJvbGxlcjtcbiAgICBsZXQgcHJvdGVjdGlvbkNvbnRyb2xsZXIgPSBjb25maWcucHJvdGVjdGlvbkNvbnRyb2xsZXI7XG4gICAgbGV0IG1zc0ZyYWdtZW50UHJvY2Vzc29yID0gTXNzRnJhZ21lbnRQcm9jZXNzb3IoY29udGV4dCkuY3JlYXRlKHtcbiAgICAgICAgbWV0cmljc01vZGVsOiBtZXRyaWNzTW9kZWwsXG4gICAgICAgIHBsYXliYWNrQ29udHJvbGxlcjogcGxheWJhY2tDb250cm9sbGVyLFxuICAgICAgICBwcm90ZWN0aW9uQ29udHJvbGxlcjogcHJvdGVjdGlvbkNvbnRyb2xsZXIsXG4gICAgICAgIGV2ZW50QnVzOiBldmVudEJ1cyxcbiAgICAgICAgY29uc3RhbnRzOiBjb25zdGFudHMsXG4gICAgICAgIElTT0JveGVyOiBjb25maWcuSVNPQm94ZXIsXG4gICAgICAgIGxvZzogY29uZmlnLmxvZyxcbiAgICAgICAgZXJySGFuZGxlcjogY29uZmlnLmVyckhhbmRsZXJcbiAgICB9KTtcbiAgICBsZXQgbXNzUGFyc2VyO1xuXG4gICAgbGV0IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7fVxuXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsaXphdGlvblJlcXVlc3RlZChlKSB7XG4gICAgICAgIGxldCBzdHJlYW1Qcm9jZXNzb3IgPSBlLnNlbmRlci5nZXRTdHJlYW1Qcm9jZXNzb3IoKTtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgRnJhZ21lbnRSZXF1ZXN0KCk7XG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0UmVwcmVzZW50YXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlci5nZXRDdXJyZW50UmVwcmVzZW50YXRpb24oKTtcbiAgICAgICAgbGV0IHBlcmlvZCxcbiAgICAgICAgICAgIHByZXNlbnRhdGlvblN0YXJ0VGltZTtcblxuICAgICAgICBwZXJpb2QgPSByZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZDtcblxuICAgICAgICByZXF1ZXN0Lm1lZGlhVHlwZSA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24udHlwZTtcbiAgICAgICAgcmVxdWVzdC50eXBlID0gaW5pdFNlZ21lbnRUeXBlO1xuICAgICAgICByZXF1ZXN0LnJhbmdlID0gcmVwcmVzZW50YXRpb24ucmFuZ2U7XG4gICAgICAgIHByZXNlbnRhdGlvblN0YXJ0VGltZSA9IHBlcmlvZC5zdGFydDtcbiAgICAgICAgLy9yZXF1ZXN0LmF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IHRpbWVsaW5lQ29udmVydGVyLmNhbGNBdmFpbGFiaWxpdHlTdGFydFRpbWVGcm9tUHJlc2VudGF0aW9uVGltZShwcmVzZW50YXRpb25TdGFydFRpbWUsIHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24ucGVyaW9kLm1wZCwgaXNEeW5hbWljKTtcbiAgICAgICAgLy9yZXF1ZXN0LmF2YWlsYWJpbGl0eUVuZFRpbWUgPSB0aW1lbGluZUNvbnZlcnRlci5jYWxjQXZhaWxhYmlsaXR5RW5kVGltZUZyb21QcmVzZW50YXRpb25UaW1lKHByZXNlbnRhdGlvblN0YXJ0VGltZSArIHBlcmlvZC5kdXJhdGlvbiwgcGVyaW9kLm1wZCwgaXNEeW5hbWljKTtcbiAgICAgICAgcmVxdWVzdC5xdWFsaXR5ID0gcmVwcmVzZW50YXRpb24uaW5kZXg7XG4gICAgICAgIHJlcXVlc3QubWVkaWFJbmZvID0gc3RyZWFtUHJvY2Vzc29yLmdldE1lZGlhSW5mbygpO1xuICAgICAgICByZXF1ZXN0LnJlcHJlc2VudGF0aW9uSWQgPSByZXByZXNlbnRhdGlvbi5pZDtcblxuICAgICAgICBjb25zdCBjaHVuayA9IGNyZWF0ZURhdGFDaHVuayhyZXF1ZXN0LCBzdHJlYW1Qcm9jZXNzb3IuZ2V0U3RyZWFtSW5mbygpLmlkLCBlLnR5cGUgIT09IGV2ZW50cy5GUkFHTUVOVF9MT0FESU5HX1BST0dSRVNTKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsaXphdGlvbiBzZWdtZW50IChtb292KVxuICAgICAgICBjaHVuay5ieXRlcyA9IG1zc0ZyYWdtZW50UHJvY2Vzc29yLmdlbmVyYXRlTW9vdihyZXByZXNlbnRhdGlvbik7XG5cbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuSU5JVF9GUkFHTUVOVF9MT0FERUQsIHtcbiAgICAgICAgICAgIGNodW5rOiBjaHVuayxcbiAgICAgICAgICAgIGZyYWdtZW50TW9kZWw6IHN0cmVhbVByb2Nlc3Nvci5nZXRGcmFnbWVudE1vZGVsKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzZW5kZXIgdmFsdWUgdG8gc3RvcCBldmVudCB0byBiZSBwcm9wYWdhdGVkXG4gICAgICAgIGUuc2VuZGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRhQ2h1bmsocmVxdWVzdCwgc3RyZWFtSWQsIGVuZEZyYWdtZW50KSB7XG4gICAgICAgIGNvbnN0IGNodW5rID0gbmV3IERhdGFDaHVuaygpO1xuXG4gICAgICAgIGNodW5rLnN0cmVhbUlkID0gc3RyZWFtSWQ7XG4gICAgICAgIGNodW5rLm1lZGlhSW5mbyA9IHJlcXVlc3QubWVkaWFJbmZvO1xuICAgICAgICBjaHVuay5zZWdtZW50VHlwZSA9IHJlcXVlc3QudHlwZTtcbiAgICAgICAgY2h1bmsuc3RhcnQgPSByZXF1ZXN0LnN0YXJ0VGltZTtcbiAgICAgICAgY2h1bmsuZHVyYXRpb24gPSByZXF1ZXN0LmR1cmF0aW9uO1xuICAgICAgICBjaHVuay5lbmQgPSBjaHVuay5zdGFydCArIGNodW5rLmR1cmF0aW9uO1xuICAgICAgICBjaHVuay5pbmRleCA9IHJlcXVlc3QuaW5kZXg7XG4gICAgICAgIGNodW5rLnF1YWxpdHkgPSByZXF1ZXN0LnF1YWxpdHk7XG4gICAgICAgIGNodW5rLnJlcHJlc2VudGF0aW9uSWQgPSByZXF1ZXN0LnJlcHJlc2VudGF0aW9uSWQ7XG4gICAgICAgIGNodW5rLmVuZEZyYWdtZW50ID0gZW5kRnJhZ21lbnQ7XG5cbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2VnbWVudE1lZGlhTG9hZGVkKGUpIHtcbiAgICAgICAgaWYgKGUuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzIG1vb2YgdG8gdHJhbnNjb2RlIGl0IGZyb20gTVNTIHRvIERBU0hcbiAgICAgICAgbGV0IHN0cmVhbVByb2Nlc3NvciA9IGUuc2VuZGVyLmdldFN0cmVhbVByb2Nlc3NvcigpO1xuICAgICAgICBtc3NGcmFnbWVudFByb2Nlc3Nvci5wcm9jZXNzRnJhZ21lbnQoZSwgc3RyZWFtUHJvY2Vzc29yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXliYWNrU2Vla0Fza2VkKCkge1xuICAgICAgICBpZiAocGxheWJhY2tDb250cm9sbGVyLmdldElzRHluYW1pYygpICYmIHBsYXliYWNrQ29udHJvbGxlci5nZXRUaW1lKCkgIT09IDApIHtcblxuICAgICAgICAgICAgLy9jcmVhdGUgZnJhZ21lbnQgaW5mbyBjb250cm9sbGVycyBmb3IgZWFjaCBzdHJlYW0gcHJvY2Vzc29ycyBvZiBhY3RpdmUgc3RyZWFtIChvbmx5IGZvciBhdWRpbywgdmlkZW8gb3IgZnJhZ21lbnRlZFRleHQpXG4gICAgICAgICAgICBsZXQgc3RyZWFtQ29udHJvbGxlciA9IHBsYXliYWNrQ29udHJvbGxlci5nZXRTdHJlYW1Db250cm9sbGVyKCk7XG4gICAgICAgICAgICBpZiAoc3RyZWFtQ29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGxldCBwcm9jZXNzb3JzID0gc3RyZWFtQ29udHJvbGxlci5nZXRBY3RpdmVTdHJlYW1Qcm9jZXNzb3JzKCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9jZXNzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Nvci5nZXRUeXBlKCkgPT09IGNvbnN0YW50cy5WSURFTyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc29yLmdldFR5cGUoKSA9PT0gY29uc3RhbnRzLkFVRElPIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzb3IuZ2V0VHlwZSgpID09PSBjb25zdGFudHMuRlJBR01FTlRFRF9URVhUKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlcmUgaXMgbm8gZnJhZ21lbnQgaW5mbyBjb250cm9sbGVyIHJlZ2lzdGVyZWQgdG8gcHJvY2Vzc29yXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbHJlYWR5UmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVybmFsQ29udHJvbGxlcnMgPSBwcm9jZXNzb3IuZ2V0RXh0ZXJuYWxDb250cm9sbGVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV4dGVybmFsQ29udHJvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxDb250cm9sbGVyc1tpXS5jb250cm9sbGVyVHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbENvbnRyb2xsZXJzW2ldLmNvbnRyb2xsZXJUeXBlID09PSAnTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbHJlYWR5UmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFnbWVudEluZm9Db250cm9sbGVyID0gTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcihjb250ZXh0KS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1Qcm9jZXNzb3I6IHByb2Nlc3NvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXM6IGV2ZW50QnVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRyaWNzTW9kZWw6IG1ldHJpY3NNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElTT0JveGVyOiBjb25maWcuSVNPQm94ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogY29uZmlnLmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mb0NvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mb0NvbnRyb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UVE1MUHJlUHJvY2Vzcyh0dG1sU3VidGl0bGVzKSB7XG4gICAgICAgIGlmICghdHRtbFN1YnRpdGxlcyB8fCAhdHRtbFN1YnRpdGxlcy5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodHRtbFN1YnRpdGxlcy5kYXRhLmluZGV4T2YoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDYvMTAvdHRhZjEnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHR0bWxTdWJ0aXRsZXMuZGF0YSA9IHR0bWxTdWJ0aXRsZXMuZGF0YS5yZXBsYWNlKCdodHRwOi8vd3d3LnczLm9yZy8yMDA2LzEwL3R0YWYxJywgJ2h0dHA6Ly93d3cudzMub3JnL25zL3R0bWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuSU5JVF9SRVFVRVNURUQsIG9uSW5pdGlhbGl6YXRpb25SZXF1ZXN0ZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiAgICAgICAgZXZlbnRCdXMub24oZXZlbnRzLlBMQVlCQUNLX1NFRUtfQVNLRUQsIG9uUGxheWJhY2tTZWVrQXNrZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiAgICAgICAgZXZlbnRCdXMub24oZXZlbnRzLkZSQUdNRU5UX0xPQURJTkdfQ09NUExFVEVELCBvblNlZ21lbnRNZWRpYUxvYWRlZCwgaW5zdGFuY2UsIGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeUJ5TmFtZShldmVudEJ1cy5nZXRDbGFzc05hbWUoKSkuRVZFTlRfUFJJT1JJVFlfSElHSCk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuVFRNTF9UT19QQVJTRSwgb25UVE1MUHJlUHJvY2VzcywgaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLklOSVRfUkVRVUVTVEVELCBvbkluaXRpYWxpemF0aW9uUmVxdWVzdGVkLCB0aGlzKTtcbiAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5QTEFZQkFDS19TRUVLX0FTS0VELCBvblBsYXliYWNrU2Vla0Fza2VkLCB0aGlzKTtcbiAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5GUkFHTUVOVF9MT0FESU5HX0NPTVBMRVRFRCwgb25TZWdtZW50TWVkaWFMb2FkZWQsIHRoaXMpO1xuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLlRUTUxfVE9fUEFSU0UsIG9uVFRNTFByZVByb2Nlc3MsIHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1zc1BhcnNlcigpIHtcbiAgICAgICAgbXNzUGFyc2VyID0gTXNzUGFyc2VyKGNvbnRleHQpLmNyZWF0ZShjb25maWcpO1xuICAgICAgICByZXR1cm4gbXNzUGFyc2VyO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICByZXNldDogcmVzZXQsXG4gICAgICAgIGNyZWF0ZU1zc1BhcnNlcjogY3JlYXRlTXNzUGFyc2VyLFxuICAgICAgICByZWdpc3RlckV2ZW50czogcmVnaXN0ZXJFdmVudHNcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuTXNzSGFuZGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzSGFuZGxlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NIYW5kbGVyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgTXNzSGFuZGxlciBmcm9tICcuL01zc0hhbmRsZXInO1xuXG4vLyBTaG92ZSBib3RoIG9mIHRoZXNlIGludG8gdGhlIGdsb2JhbCBzY29wZVxudmFyIGNvbnRleHQgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCBnbG9iYWw7XG5cbnZhciBkYXNoanMgPSBjb250ZXh0LmRhc2hqcztcbmlmICghZGFzaGpzKSB7XG4gICAgZGFzaGpzID0gY29udGV4dC5kYXNoanMgPSB7fTtcbn1cblxuZGFzaGpzLk1zc0hhbmRsZXIgPSBNc3NIYW5kbGVyO1xuXG5leHBvcnQgZGVmYXVsdCBkYXNoanM7XG5leHBvcnQgeyBNc3NIYW5kbGVyIH07XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgTXNzUGFyc2VyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIG9iamVjdFxuICovXG5mdW5jdGlvbiBNc3NQYXJzZXIoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IEJBU0U2NCA9IGNvbmZpZy5CQVNFNjQ7XG4gICAgY29uc3QgbG9nID0gY29uZmlnLmxvZztcbiAgICBjb25zdCBjb25zdGFudHMgPSBjb25maWcuY29uc3RhbnRzO1xuXG4gICAgY29uc3QgREVGQVVMVF9USU1FX1NDQUxFID0gMTAwMDAwMDAuMDtcbiAgICBjb25zdCBTVVBQT1JURURfQ09ERUNTID0gWydBQUMnLCAnQUFDTCcsICdBVkMxJywgJ0gyNjQnLCAnVFRNTCcsICdERlhQJ107XG4gICAgLy8gTVBFRy1EQVNIIFJvbGUgYW5kIGFjY2Vzc2liaWxpdHkgbWFwcGluZyBhY2NvcmRpbmcgdG8gRVRTSSBUUyAxMDMgMjg1IHYxLjEuMSAoc2VjdGlvbiA3LjEuMilcbiAgICBjb25zdCBST0xFID0ge1xuICAgICAgICAnU1VCVCc6ICdhbHRlcm5hdGUnLFxuICAgICAgICAnQ0FQVCc6ICdhbHRlcm5hdGUnLCAvLyAnQ0FQVCcgaXMgY29tbW9ubHkgZXF1aXZhbGVudCB0byAnU1VCVCdcbiAgICAgICAgJ0RFU0MnOiAnbWFpbidcbiAgICB9O1xuICAgIGNvbnN0IEFDQ0VTU0lCSUxJVFkgPSB7XG4gICAgICAgICdERVNDJzogJzInXG4gICAgfTtcbiAgICBjb25zdCBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ID0ge1xuICAgICAgICA5NjAwMDogMHgwLFxuICAgICAgICA4ODIwMDogMHgxLFxuICAgICAgICA2NDAwMDogMHgyLFxuICAgICAgICA0ODAwMDogMHgzLFxuICAgICAgICA0NDEwMDogMHg0LFxuICAgICAgICAzMjAwMDogMHg1LFxuICAgICAgICAyNDAwMDogMHg2LFxuICAgICAgICAyMjA1MDogMHg3LFxuICAgICAgICAxNjAwMDogMHg4LFxuICAgICAgICAxMjAwMDogMHg5LFxuICAgICAgICAxMTAyNTogMHhBLFxuICAgICAgICA4MDAwOiAweEIsXG4gICAgICAgIDczNTA6IDB4Q1xuICAgIH07XG4gICAgY29uc3QgbWltZVR5cGVNYXAgPSB7XG4gICAgICAgICd2aWRlbyc6ICd2aWRlby9tcDQnLFxuICAgICAgICAnYXVkaW8nOiAnYXVkaW8vbXA0JyxcbiAgICAgICAgJ3RleHQnOiAnYXBwbGljYXRpb24vbXA0J1xuICAgIH07XG5cbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIG1lZGlhUGxheWVyTW9kZWw7XG5cblxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgICBtZWRpYVBsYXllck1vZGVsID0gY29uZmlnLm1lZGlhUGxheWVyTW9kZWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwUGVyaW9kKHNtb290aFN0cmVhbWluZ01lZGlhLCB0aW1lc2NhbGUpIHtcbiAgICAgICAgbGV0IHBlcmlvZCA9IHt9O1xuICAgICAgICBsZXQgc3RyZWFtcyxcbiAgICAgICAgICAgIGFkYXB0YXRpb247XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggU3RyZWFtSW5kZXggbm9kZSwgY3JlYXRlIGFuIEFkYXB0YXRpb25TZXQgZWxlbWVudFxuICAgICAgICBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5ID0gW107XG4gICAgICAgIHN0cmVhbXMgPSBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnU3RyZWFtSW5kZXgnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhZGFwdGF0aW9uID0gbWFwQWRhcHRhdGlvblNldChzdHJlYW1zW2ldLCB0aW1lc2NhbGUpO1xuICAgICAgICAgICAgaWYgKGFkYXB0YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5LnB1c2goYWRhcHRhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwZXJpb2QuQWRhcHRhdGlvblNldCA9IChwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5Lmxlbmd0aCA+IDEpID8gcGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheSA6IHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGVyaW9kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcEFkYXB0YXRpb25TZXQoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSkge1xuXG4gICAgICAgIGxldCBhZGFwdGF0aW9uU2V0ID0ge307XG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IHNlZ21lbnRUZW1wbGF0ZSA9IHt9O1xuICAgICAgICBsZXQgcXVhbGl0eUxldmVscyxcbiAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgc2VnbWVudHMsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGFkYXB0YXRpb25TZXQuaWQgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ05hbWUnKSA/IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTmFtZScpIDogc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdUeXBlJyk7XG4gICAgICAgIGFkYXB0YXRpb25TZXQuY29udGVudFR5cGUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1R5cGUnKTtcbiAgICAgICAgYWRhcHRhdGlvblNldC5sYW5nID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdMYW5ndWFnZScpIHx8ICd1bmQnO1xuICAgICAgICBhZGFwdGF0aW9uU2V0Lm1pbWVUeXBlID0gbWltZVR5cGVNYXBbYWRhcHRhdGlvblNldC5jb250ZW50VHlwZV07XG4gICAgICAgIGFkYXB0YXRpb25TZXQuc3ViVHlwZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnU3VidHlwZScpO1xuICAgICAgICBhZGFwdGF0aW9uU2V0Lm1heFdpZHRoID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdNYXhXaWR0aCcpO1xuICAgICAgICBhZGFwdGF0aW9uU2V0Lm1heEhlaWdodCA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTWF4SGVpZ2h0Jyk7XG5cbiAgICAgICAgLy8gTWFwIHN1YlR5cGVzIHRvIE1QRUctREFTSCBBZGFwdGF0aW9uU2V0IHJvbGUgYW5kIGFjY2Vzc2liaWxpdHkgKHNlZSBFVFNJIFRTIDEwMyAyODUgdjEuMS4xLCBzZWN0aW9uIDcuMS4yKVxuICAgICAgICBpZiAoYWRhcHRhdGlvblNldC5zdWJUeXBlKSB7XG4gICAgICAgICAgICBpZiAoUk9MRVthZGFwdGF0aW9uU2V0LnN1YlR5cGVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOm1wZWc6ZGFzaDpyb2xlOjIwMTEnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogUk9MRVthZGFwdGF0aW9uU2V0LnN1YlR5cGVdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhZGFwdGF0aW9uU2V0LlJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25TZXQuUm9sZV9hc0FycmF5ID0gW3JvbGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFDQ0VTU0lCSUxJVFlbYWRhcHRhdGlvblNldC5zdWJUeXBlXSkge1xuICAgICAgICAgICAgICAgIGxldCBhY2Nlc3NpYmlsaXR5ID0ge1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWVJZFVyaTogJ3Vybjp0dmE6bWV0YWRhdGE6Y3M6QXVkaW9QdXJwb3NlQ1M6MjAwNycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBBQ0NFU1NJQklMSVRZW2FkYXB0YXRpb25TZXQuc3ViVHlwZV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25TZXQuQWNjZXNzaWJpbGl0eSA9IGFjY2Vzc2liaWxpdHk7XG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvblNldC5BY2Nlc3NpYmlsaXR5X2FzQXJyYXkgPSBbYWNjZXNzaWJpbGl0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSBTZWdtZW50VGVtcGxhdGUgd2l0aCBhIFNlZ21lbnRUaW1lbGluZVxuICAgICAgICBzZWdtZW50VGVtcGxhdGUgPSBtYXBTZWdtZW50VGVtcGxhdGUoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSk7XG5cbiAgICAgICAgcXVhbGl0eUxldmVscyA9IHN0cmVhbUluZGV4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdRdWFsaXR5TGV2ZWwnKTtcbiAgICAgICAgLy8gRm9yIGVhY2ggUXVhbGl0eUxldmVsIG5vZGUsIGNyZWF0ZSBhIFJlcHJlc2VudGF0aW9uIGVsZW1lbnRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHF1YWxpdHlMZXZlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIFByb3BhZ2F0ZSBCYXNlVVJMIGFuZCBtaW1lVHlwZVxuICAgICAgICAgICAgcXVhbGl0eUxldmVsc1tpXS5CYXNlVVJMID0gYWRhcHRhdGlvblNldC5CYXNlVVJMO1xuICAgICAgICAgICAgcXVhbGl0eUxldmVsc1tpXS5taW1lVHlwZSA9IGFkYXB0YXRpb25TZXQubWltZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIFNldCBxdWFsaXR5IGxldmVsIGlkXG4gICAgICAgICAgICBxdWFsaXR5TGV2ZWxzW2ldLklkID0gYWRhcHRhdGlvblNldC5pZCArICdfJyArIHF1YWxpdHlMZXZlbHNbaV0uZ2V0QXR0cmlidXRlKCdJbmRleCcpO1xuXG4gICAgICAgICAgICAvLyBNYXAgUmVwcmVzZW50YXRpb24gdG8gUXVhbGl0eUxldmVsXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbiA9IG1hcFJlcHJlc2VudGF0aW9uKHF1YWxpdHlMZXZlbHNbaV0sIHN0cmVhbUluZGV4KTtcblxuICAgICAgICAgICAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29weSBTZWdtZW50VGVtcGxhdGUgaW50byBSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLlNlZ21lbnRUZW1wbGF0ZSA9IHNlZ21lbnRUZW1wbGF0ZTtcblxuICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9ucy5wdXNoKHJlcHJlc2VudGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXByZXNlbnRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkYXB0YXRpb25TZXQuUmVwcmVzZW50YXRpb24gPSAocmVwcmVzZW50YXRpb25zLmxlbmd0aCA+IDEpID8gcmVwcmVzZW50YXRpb25zIDogcmVwcmVzZW50YXRpb25zWzBdO1xuICAgICAgICBhZGFwdGF0aW9uU2V0LlJlcHJlc2VudGF0aW9uX2FzQXJyYXkgPSByZXByZXNlbnRhdGlvbnM7XG5cbiAgICAgICAgLy8gU2V0IFNlZ21lbnRUZW1wbGF0ZVxuICAgICAgICBhZGFwdGF0aW9uU2V0LlNlZ21lbnRUZW1wbGF0ZSA9IHNlZ21lbnRUZW1wbGF0ZTtcblxuICAgICAgICBzZWdtZW50cyA9IHNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuU19hc0FycmF5O1xuXG4gICAgICAgIHJldHVybiBhZGFwdGF0aW9uU2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcFJlcHJlc2VudGF0aW9uKHF1YWxpdHlMZXZlbCwgc3RyZWFtSW5kZXgpIHtcblxuICAgICAgICBsZXQgcmVwcmVzZW50YXRpb24gPSB7fTtcbiAgICAgICAgbGV0IGZvdXJDQ1ZhbHVlID0gbnVsbDtcbiAgICAgICAgbGV0IHR5cGUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1R5cGUnKTtcblxuICAgICAgICByZXByZXNlbnRhdGlvbi5pZCA9IHF1YWxpdHlMZXZlbC5JZDtcbiAgICAgICAgcmVwcmVzZW50YXRpb24uYmFuZHdpZHRoID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQml0cmF0ZScpLCAxMCk7XG4gICAgICAgIHJlcHJlc2VudGF0aW9uLm1pbWVUeXBlID0gcXVhbGl0eUxldmVsLm1pbWVUeXBlO1xuICAgICAgICByZXByZXNlbnRhdGlvbi53aWR0aCA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ01heFdpZHRoJyksIDEwKTtcbiAgICAgICAgcmVwcmVzZW50YXRpb24uaGVpZ2h0ID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnTWF4SGVpZ2h0JyksIDEwKTtcblxuICAgICAgICBmb3VyQ0NWYWx1ZSA9IHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0ZvdXJDQycpO1xuXG4gICAgICAgIC8vIElmIEZvdXJDQyBub3QgZGVmaW5lZCBhdCBRdWFsaXR5TGV2ZWwgbGV2ZWwsIHRoZW4gZ2V0IGl0IGZyb20gU3RyZWFtSW5kZXggbGV2ZWxcbiAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSBudWxsIHx8IGZvdXJDQ1ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgZm91ckNDVmFsdWUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ0ZvdXJDQycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc3RpbGwgbm90IGRlZmluZWQgKG9wdGlvbm5hbCBmb3IgYXVkaW8gc3RyZWFtLCBzZWUgaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9mZjcyODExNiUyOHY9dnMuOTUlMjkuYXNweCksXG4gICAgICAgIC8vIHRoZW4gd2UgY29uc2lkZXIgdGhlIHN0cmVhbSBpcyBhbiBhdWRpbyBBQUMgc3RyZWFtXG4gICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gbnVsbCB8fCBmb3VyQ0NWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgZm91ckNDVmFsdWUgPSAnQUFDJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIGxvZygnW01zc1BhcnNlcl0gRm91ckNDIGlzIG5vdCBkZWZpbmVkIHdoZXJlYXMgaXQgaXMgcmVxdWlyZWQgZm9yIGEgUXVhbGl0eUxldmVsIGVsZW1lbnQgZm9yIGEgU3RyZWFtSW5kZXggb2YgdHlwZSBcInZpZGVvXCInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGNvZGVjIGlzIHN1cHBvcnRlZFxuICAgICAgICBpZiAoU1VQUE9SVEVEX0NPREVDUy5pbmRleE9mKGZvdXJDQ1ZhbHVlLnRvVXBwZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gRG8gbm90IHNlbmQgd2FybmluZ1xuICAgICAgICAgICAgLy90aGlzLmVyckhhbmRsZXIuc2VuZFdhcm5pbmcoTWVkaWFQbGF5ZXIuZGVwZW5kZW5jaWVzLkVycm9ySGFuZGxlci5wcm90b3R5cGUuTUVESUFfRVJSX0NPREVDX1VOU1VQUE9SVEVELCAnQ29kZWMgbm90IHN1cHBvcnRlZCcsIHtjb2RlYzogZm91ckNDVmFsdWV9KTtcbiAgICAgICAgICAgIGxvZygnW01zc1BhcnNlcl0gQ29kZWMgbm90IHN1cHBvcnRlZDogJyArIGZvdXJDQ1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGNvZGVjcyB2YWx1ZSBhY2NvcmRpbmcgdG8gRm91ckNDIGZpZWxkXG4gICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gJ0gyNjQnIHx8IGZvdXJDQ1ZhbHVlID09PSAnQVZDMScpIHtcbiAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLmNvZGVjcyA9IGdldEgyNjRDb2RlYyhxdWFsaXR5TGV2ZWwpO1xuICAgICAgICB9IGVsc2UgaWYgKGZvdXJDQ1ZhbHVlLmluZGV4T2YoJ0FBQycpID49IDApIHtcbiAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLmNvZGVjcyA9IGdldEFBQ0NvZGVjKHF1YWxpdHlMZXZlbCwgZm91ckNDVmFsdWUpO1xuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uYXVkaW9TYW1wbGluZ1JhdGUgPSBwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdTYW1wbGluZ1JhdGUnKSwgMTApO1xuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uYXVkaW9DaGFubmVscyA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0NoYW5uZWxzJyksIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3VyQ0NWYWx1ZS5pbmRleE9mKCdUVE1MJykgfHwgZm91ckNDVmFsdWUuaW5kZXhPZignREZYUCcpKSB7XG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbi5jb2RlY3MgPSBjb25zdGFudHMuU1RQUDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLmNvZGVjUHJpdmF0ZURhdGEgPSAnJyArIHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0NvZGVjUHJpdmF0ZURhdGEnKTtcbiAgICAgICAgcmVwcmVzZW50YXRpb24uQmFzZVVSTCA9IHF1YWxpdHlMZXZlbC5CYXNlVVJMO1xuXG4gICAgICAgIHJldHVybiByZXByZXNlbnRhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIMjY0Q29kZWMocXVhbGl0eUxldmVsKSB7XG4gICAgICAgIGxldCBjb2RlY1ByaXZhdGVEYXRhID0gcXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ29kZWNQcml2YXRlRGF0YScpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBuYWxIZWFkZXIsXG4gICAgICAgICAgICBhdmNvdGk7XG5cblxuICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIENvZGVjUHJpdmF0ZURhdGEgZmllbGQgdGhlIGhleGFkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgLy8gdGhyZWUgYnl0ZXMgaW4gdGhlIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQgTkFMIHVuaXQuXG4gICAgICAgIC8vID0+IEZpbmQgdGhlIFNQUyBuYWwgaGVhZGVyXG4gICAgICAgIG5hbEhlYWRlciA9IC8wMDAwMDAwMVswLTldNy8uZXhlYyhjb2RlY1ByaXZhdGVEYXRhKTtcbiAgICAgICAgLy8gPT4gRmluZCB0aGUgNiBjaGFyYWN0ZXJzIGFmdGVyIHRoZSBTUFMgbmFsSGVhZGVyIChpZiBpdCBleGlzdHMpXG4gICAgICAgIGF2Y290aSA9IG5hbEhlYWRlciAmJiBuYWxIZWFkZXJbMF0gPyAoY29kZWNQcml2YXRlRGF0YS5zdWJzdHIoY29kZWNQcml2YXRlRGF0YS5pbmRleE9mKG5hbEhlYWRlclswXSkgKyAxMCwgNikpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiAnYXZjMS4nICsgYXZjb3RpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFBQ0NvZGVjKHF1YWxpdHlMZXZlbCwgZm91ckNDVmFsdWUpIHtcbiAgICAgICAgbGV0IG9iamVjdFR5cGUgPSAwO1xuICAgICAgICBsZXQgY29kZWNQcml2YXRlRGF0YSA9IHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0NvZGVjUHJpdmF0ZURhdGEnKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgc2FtcGxpbmdSYXRlID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnU2FtcGxpbmdSYXRlJyksIDEwKTtcbiAgICAgICAgbGV0IGNvZGVjUHJpdmF0ZURhdGFIZXgsXG4gICAgICAgICAgICBhcnIxNixcbiAgICAgICAgICAgIGluZGV4RnJlcSxcbiAgICAgICAgICAgIGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXg7XG5cbiAgICAgICAgLy9jaHJvbWUgcHJvYmxlbSwgaW4gaW1wbGljaXQgQUFDIEhFIGRlZmluaXRpb24sIHNvIHdoZW4gQUFDSCBpcyBkZXRlY3RlZCBpbiBGb3VyQ0NcbiAgICAgICAgLy9zZXQgb2JqZWN0VHlwZSB0byA1ID0+IHN0cmFuZ2UsIGl0IHNob3VsZCBiZSAyXG4gICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gJ0FBQ0gnKSB7XG4gICAgICAgICAgICBvYmplY3RUeXBlID0gMHgwNTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGNvZGVjUHJpdmF0ZURhdGEgaXMgZW1wdHksIGJ1aWxkIGl0IDpcbiAgICAgICAgaWYgKGNvZGVjUHJpdmF0ZURhdGEgPT09IHVuZGVmaW5lZCB8fCBjb2RlY1ByaXZhdGVEYXRhID09PSAnJykge1xuICAgICAgICAgICAgb2JqZWN0VHlwZSA9IDB4MDI7IC8vQUFDIE1haW4gTG93IENvbXBsZXhpdHkgPT4gb2JqZWN0IFR5cGUgPSAyXG4gICAgICAgICAgICBpbmRleEZyZXEgPSBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4W3NhbXBsaW5nUmF0ZV07XG4gICAgICAgICAgICBpZiAoZm91ckNDVmFsdWUgPT09ICdBQUNIJykge1xuICAgICAgICAgICAgICAgIC8vIDQgYnl0ZXMgOiAgICAgWFhYWFggICAgICAgICBYWFhYICAgICAgICAgIFhYWFggICAgICAgICAgICAgWFhYWCAgICAgICAgICAgICAgICAgIFhYWFhYICAgICAgWFhYICAgWFhYWFhYWFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAnIE9iamVjdFR5cGUnICdGcmVxIEluZGV4JyAnQ2hhbm5lbHMgdmFsdWUnICAgJ0V4dGVucyBTYW1wbCBGcmVxJyAgJ09iamVjdFR5cGUnICAnR0FTJyAnYWxpZ25tZW50ID0gMCdcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlID0gMHgwNTsgLy8gSGlnaCBFZmZpY2llbmN5IEFBQyBQcm9maWxlID0gb2JqZWN0IFR5cGUgPSA1IFNCUlxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSBuZXcgVWludDhBcnJheSg0KTtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25TYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ID0gc2FtcGxpbmdGcmVxdWVuY3lJbmRleFtzYW1wbGluZ1JhdGUgKiAyXTsgLy8gaW4gSEUgQUFDIEV4dGVuc2lvbiBTYW1wbGluZyBmcmVxdWVuY2VcbiAgICAgICAgICAgICAgICAvLyBlcXVhbHMgdG8gU2FtcGxpbmdSYXRlKjJcbiAgICAgICAgICAgICAgICAvL0ZyZXEgSW5kZXggaXMgcHJlc2VudCBmb3IgMyBiaXRzIGluIHRoZSBmaXJzdCBieXRlLCBsYXN0IGJpdCBpcyBpbiB0aGUgc2Vjb25kXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVswXSA9IChvYmplY3RUeXBlIDw8IDMpIHwgKGluZGV4RnJlcSA+PiAxKTtcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzFdID0gKGluZGV4RnJlcSA8PCA3KSB8IChxdWFsaXR5TGV2ZWwuQ2hhbm5lbHMgPDwgMykgfCAoZXh0ZW5zaW9uU2FtcGxpbmdGcmVxdWVuY3lJbmRleCA+PiAxKTtcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzJdID0gKGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPDwgNykgfCAoMHgwMiA8PCAyKTsgLy8gb3JpZ2luIG9iamVjdCB0eXBlIGVxdWFscyB0byAyID0+IEFBQyBNYWluIExvdyBDb21wbGV4aXR5XG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVszXSA9IDB4MDsgLy9hbGlnbm1lbnQgYml0c1xuXG4gICAgICAgICAgICAgICAgYXJyMTYgPSBuZXcgVWludDE2QXJyYXkoMik7XG4gICAgICAgICAgICAgICAgYXJyMTZbMF0gPSAoY29kZWNQcml2YXRlRGF0YVswXSA8PCA4KSArIGNvZGVjUHJpdmF0ZURhdGFbMV07XG4gICAgICAgICAgICAgICAgYXJyMTZbMV0gPSAoY29kZWNQcml2YXRlRGF0YVsyXSA8PCA4KSArIGNvZGVjUHJpdmF0ZURhdGFbM107XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IGRlY2ltYWwgdG8gaGV4IHZhbHVlXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YUhleCA9IGFycjE2WzBdLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhSGV4ID0gYXJyMTZbMF0udG9TdHJpbmcoMTYpICsgYXJyMTZbMV0udG9TdHJpbmcoMTYpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIDIgYnl0ZXMgOiAgICAgWFhYWFggICAgICAgICBYWFhYICAgICAgICAgIFhYWFggICAgICAgICAgICAgIFhYWFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAnIE9iamVjdFR5cGUnICdGcmVxIEluZGV4JyAnQ2hhbm5lbHMgdmFsdWUnICAgJ0dBUyA9IDAwMCdcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoMik7XG4gICAgICAgICAgICAgICAgLy9GcmVxIEluZGV4IGlzIHByZXNlbnQgZm9yIDMgYml0cyBpbiB0aGUgZmlyc3QgYnl0ZSwgbGFzdCBiaXQgaXMgaW4gdGhlIHNlY29uZFxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGFbMF0gPSAob2JqZWN0VHlwZSA8PCAzKSB8IChpbmRleEZyZXEgPj4gMSk7XG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVsxXSA9IChpbmRleEZyZXEgPDwgNykgfCAocGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ2hhbm5lbHMnKSwgMTApIDw8IDMpO1xuICAgICAgICAgICAgICAgIC8vIHB1dCB0aGUgMiBieXRlcyBpbiBhbiAxNiBiaXRzIGFycmF5XG4gICAgICAgICAgICAgICAgYXJyMTYgPSBuZXcgVWludDE2QXJyYXkoMSk7XG4gICAgICAgICAgICAgICAgYXJyMTZbMF0gPSAoY29kZWNQcml2YXRlRGF0YVswXSA8PCA4KSArIGNvZGVjUHJpdmF0ZURhdGFbMV07XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IGRlY2ltYWwgdG8gaGV4IHZhbHVlXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YUhleCA9IGFycjE2WzBdLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YSA9ICcnICsgY29kZWNQcml2YXRlRGF0YUhleDtcbiAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSBjb2RlY1ByaXZhdGVEYXRhLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBxdWFsaXR5TGV2ZWwuc2V0QXR0cmlidXRlKCdDb2RlY1ByaXZhdGVEYXRhJywgY29kZWNQcml2YXRlRGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0VHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JqZWN0VHlwZSA9IChwYXJzZUludChjb2RlY1ByaXZhdGVEYXRhLnN1YnN0cigwLCAyKSwgMTYpICYgMHhGOCkgPj4gMztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnbXA0YS40MC4nICsgb2JqZWN0VHlwZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXBTZWdtZW50VGVtcGxhdGUoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSkge1xuXG4gICAgICAgIGxldCBzZWdtZW50VGVtcGxhdGUgPSB7fTtcbiAgICAgICAgbGV0IG1lZGlhVXJsLFxuICAgICAgICAgICAgc3RyZWFtSW5kZXhUaW1lU2NhbGU7XG5cbiAgICAgICAgbWVkaWFVcmwgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1VybCcpLnJlcGxhY2UoJ3tiaXRyYXRlfScsICckQmFuZHdpZHRoJCcpO1xuICAgICAgICBtZWRpYVVybCA9IG1lZGlhVXJsLnJlcGxhY2UoJ3tzdGFydCB0aW1lfScsICckVGltZSQnKTtcblxuICAgICAgICBzdHJlYW1JbmRleFRpbWVTY2FsZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnVGltZVNjYWxlJyk7XG4gICAgICAgIHN0cmVhbUluZGV4VGltZVNjYWxlID0gc3RyZWFtSW5kZXhUaW1lU2NhbGUgPyBwYXJzZUZsb2F0KHN0cmVhbUluZGV4VGltZVNjYWxlKSA6IHRpbWVzY2FsZTtcblxuICAgICAgICBzZWdtZW50VGVtcGxhdGUubWVkaWEgPSBtZWRpYVVybDtcbiAgICAgICAgc2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSA9IHN0cmVhbUluZGV4VGltZVNjYWxlO1xuXG4gICAgICAgIHNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUgPSBtYXBTZWdtZW50VGltZWxpbmUoc3RyZWFtSW5kZXgsIHNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGUpO1xuXG4gICAgICAgIHJldHVybiBzZWdtZW50VGVtcGxhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwU2VnbWVudFRpbWVsaW5lKHN0cmVhbUluZGV4LCB0aW1lc2NhbGUpIHtcblxuICAgICAgICBsZXQgc2VnbWVudFRpbWVsaW5lID0ge307XG4gICAgICAgIGxldCBjaHVua3MgPSBzdHJlYW1JbmRleC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYycpO1xuICAgICAgICBsZXQgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IHNlZ21lbnQ7XG4gICAgICAgIGxldCBwcmV2U2VnbWVudDtcbiAgICAgICAgbGV0IHRNYW5pZmVzdDtcbiAgICAgICAgbGV0IGksaixyO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlZ21lbnQgPSB7fTtcblxuICAgICAgICAgICAgLy8gR2V0IHRpbWUgJ3QnIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAgICAgdE1hbmlmZXN0ID0gY2h1bmtzW2ldLmdldEF0dHJpYnV0ZSgndCcpO1xuXG4gICAgICAgICAgICAvLyA9PiBzZWdtZW50LnRNYW5pZmVzdCA9IG9yaWdpbmFsIHRpbWVzdGFtcCB2YWx1ZSBhcyBhIHN0cmluZyAoZm9yIGNvbnN0cnVjdGluZyB0aGUgZnJhZ21lbnQgcmVxdWVzdCB1cmwsIHNlZSBEYXNoSGFuZGxlcilcbiAgICAgICAgICAgIC8vID0+IHNlZ21lbnQudCA9IG51bWJlciB2YWx1ZSBvZiB0aW1lc3RhbXAgKG1heWJlIHJvdW5kZWQgdmFsdWUsIGJ1dCBvbmx5IGZvciAwLjEgbWljcm9zZWNvbmQpXG4gICAgICAgICAgICBzZWdtZW50LnRNYW5pZmVzdCA9IHBhcnNlRmxvYXQodE1hbmlmZXN0KTtcbiAgICAgICAgICAgIHNlZ21lbnQudCA9IHBhcnNlRmxvYXQodE1hbmlmZXN0KTtcblxuICAgICAgICAgICAgLy8gR2V0IGR1cmF0aW9uICdkJyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgICAgIHNlZ21lbnQuZCA9IHBhcnNlRmxvYXQoY2h1bmtzW2ldLmdldEF0dHJpYnV0ZSgnZCcpKTtcblxuICAgICAgICAgICAgLy8gSWYgJ3QnIG5vdCBkZWZpbmVkIGZvciBmaXJzdCBzZWdtZW50IHRoZW4gdD0wXG4gICAgICAgICAgICBpZiAoKGkgPT09IDApICYmICFzZWdtZW50LnQpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LnQgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcmV2aW91cyBzZWdtZW50IGR1cmF0aW9uIGlmIG5vdCBkZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U2VnbWVudC5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTZWdtZW50LmQgPSBwYXJzZUZsb2F0KHRNYW5pZmVzdCkgLSBwYXJzZUZsb2F0KHByZXZTZWdtZW50LnRNYW5pZmVzdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2VnbWVudC5kID0gc2VnbWVudC50IC0gcHJldlNlZ21lbnQudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTZXQgc2VnbWVudCBhYnNvbHV0ZSB0aW1lc3RhbXAgaWYgbm90IHNldCBpbiBtYW5pZmVzdFxuICAgICAgICAgICAgICAgIGlmICghc2VnbWVudC50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudE1hbmlmZXN0ID0gcGFyc2VGbG9hdChwcmV2U2VnbWVudC50TWFuaWZlc3QpICsgcHJldlNlZ21lbnQuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudCA9IHBhcnNlRmxvYXQoc2VnbWVudC50TWFuaWZlc3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudC50ID0gcHJldlNlZ21lbnQudCArIHByZXZTZWdtZW50LmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHNlZ21lbnQuZDtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBzZWdtZW50XG4gICAgICAgICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0IGZvciAncicgYXR0cmlidXRlIChpLmUuIFwicmVwZWF0XCIgYXMgaW4gTVBFRy1EQVNIKVxuICAgICAgICAgICAgciA9IHBhcnNlRmxvYXQoY2h1bmtzW2ldLmdldEF0dHJpYnV0ZSgncicpKTtcbiAgICAgICAgICAgIGlmIChyKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgKHIgLSAxKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC50ID0gcHJldlNlZ21lbnQudCArIHByZXZTZWdtZW50LmQ7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuZCA9IHByZXZTZWdtZW50LmQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudE1hbmlmZXN0ICA9IHBhcnNlRmxvYXQocHJldlNlZ21lbnQudE1hbmlmZXN0KSArIHByZXZTZWdtZW50LmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gc2VnbWVudC5kO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlZ21lbnRUaW1lbGluZS5TID0gc2VnbWVudHM7XG4gICAgICAgIHNlZ21lbnRUaW1lbGluZS5TX2FzQXJyYXkgPSBzZWdtZW50cztcbiAgICAgICAgc2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uID0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XG5cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRUaW1lbGluZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRLSURGcm9tUHJvdGVjdGlvbkhlYWRlcihwcm90ZWN0aW9uSGVhZGVyKSB7XG4gICAgICAgIGxldCBwckhlYWRlcixcbiAgICAgICAgICAgIHdybUhlYWRlcixcbiAgICAgICAgICAgIHhtbFJlYWRlcixcbiAgICAgICAgICAgIEtJRDtcblxuICAgICAgICAvLyBHZXQgUGxheVJlYWR5IGhlYWRlciBhcyBieXRlIGFycmF5IChiYXNlNjQgZGVjb2RlZClcbiAgICAgICAgcHJIZWFkZXIgPSBCQVNFNjQuZGVjb2RlQXJyYXkocHJvdGVjdGlvbkhlYWRlci5maXJzdENoaWxkLmRhdGEpO1xuXG4gICAgICAgIC8vIEdldCBSaWdodCBNYW5hZ2VtZW50IGhlYWRlciAoV1JNSEVBREVSKSBmcm9tIFBsYXlSZWFkeSBoZWFkZXJcbiAgICAgICAgd3JtSGVhZGVyID0gZ2V0V1JNSGVhZGVyRnJvbVBSSGVhZGVyKHBySGVhZGVyKTtcblxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gbXVsdGktYnl0ZSB0byB1bmljb2RlXG4gICAgICAgIHdybUhlYWRlciA9IG5ldyBVaW50MTZBcnJheSh3cm1IZWFkZXIuYnVmZmVyKTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIHN0cmluZ1xuICAgICAgICB3cm1IZWFkZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHdybUhlYWRlcik7XG5cbiAgICAgICAgLy8gUGFyc2UgPFdSTUhlYWRlcj4gdG8gZ2V0IEtJRCBmaWVsZCB2YWx1ZVxuICAgICAgICB4bWxSZWFkZXIgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcod3JtSGVhZGVyLCAnYXBwbGljYXRpb24veG1sJyk7XG4gICAgICAgIEtJRCA9IHhtbFJlYWRlci5xdWVyeVNlbGVjdG9yKCdLSUQnKS50ZXh0Q29udGVudDtcblxuICAgICAgICAvLyBHZXQgS0lEIChiYXNlNjQgZGVjb2RlZCkgYXMgYnl0ZSBhcnJheVxuICAgICAgICBLSUQgPSBCQVNFNjQuZGVjb2RlQXJyYXkoS0lEKTtcblxuICAgICAgICAvLyBDb252ZXJ0IFVVSUQgZnJvbSBsaXR0bGUtZW5kaWFuIHRvIGJpZy1lbmRpYW5cbiAgICAgICAgY29udmVydFV1aWRFbmRpYW5uZXNzKEtJRCk7XG5cbiAgICAgICAgcmV0dXJuIEtJRDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXUk1IZWFkZXJGcm9tUFJIZWFkZXIocHJIZWFkZXIpIHtcbiAgICAgICAgbGV0IGxlbmd0aCxcbiAgICAgICAgICAgIHJlY29yZENvdW50LFxuICAgICAgICAgICAgcmVjb3JkVHlwZSxcbiAgICAgICAgICAgIHJlY29yZExlbmd0aCxcbiAgICAgICAgICAgIHJlY29yZFZhbHVlO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgLy8gUGFyc2UgUGxheVJlYWR5IGhlYWRlclxuXG4gICAgICAgIC8vIExlbmd0aCAtIDMyIGJpdHMgKExFIGZvcm1hdClcbiAgICAgICAgbGVuZ3RoID0gKHBySGVhZGVyW2kgKyAzXSA8PCAyNCkgKyAocHJIZWFkZXJbaSArIDJdIDw8IDE2KSArIChwckhlYWRlcltpICsgMV0gPDwgOCkgKyBwckhlYWRlcltpXTtcbiAgICAgICAgaSArPSA0O1xuXG4gICAgICAgIC8vIFJlY29yZCBjb3VudCAtIDE2IGJpdHMgKExFIGZvcm1hdClcbiAgICAgICAgcmVjb3JkQ291bnQgPSAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XG4gICAgICAgIGkgKz0gMjtcblxuICAgICAgICAvLyBQYXJzZSByZWNvcmRzXG4gICAgICAgIHdoaWxlIChpIDwgcHJIZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdHlwZSAtIDE2IGJpdHMgKExFIGZvcm1hdClcbiAgICAgICAgICAgIHJlY29yZFR5cGUgPSAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XG4gICAgICAgICAgICBpICs9IDI7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFJpZ2h0cyBNYW5hZ2VtZW50IGhlYWRlciAocmVjb3JkIHR5cGUgPSAweDAxKVxuICAgICAgICAgICAgaWYgKHJlY29yZFR5cGUgPT09IDB4MDEpIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlY29yZCBsZW5ndGggLSAxNiBiaXRzIChMRSBmb3JtYXQpXG4gICAgICAgICAgICAgICAgcmVjb3JkTGVuZ3RoID0gKHBySGVhZGVyW2kgKyAxXSA8PCA4KSArIHBySGVhZGVyW2ldO1xuICAgICAgICAgICAgICAgIGkgKz0gMjtcblxuICAgICAgICAgICAgICAgIC8vIFJlY29yZCB2YWx1ZSA9PiBjb250YWlucyA8V1JNSEVBREVSPlxuICAgICAgICAgICAgICAgIHJlY29yZFZhbHVlID0gbmV3IFVpbnQ4QXJyYXkocmVjb3JkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICByZWNvcmRWYWx1ZS5zZXQocHJIZWFkZXIuc3ViYXJyYXkoaSwgaSArIHJlY29yZExlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVdWlkRW5kaWFubmVzcyh1dWlkKSB7XG4gICAgICAgIHN3YXBCeXRlcyh1dWlkLCAwLCAzKTtcbiAgICAgICAgc3dhcEJ5dGVzKHV1aWQsIDEsIDIpO1xuICAgICAgICBzd2FwQnl0ZXModXVpZCwgNCwgNSk7XG4gICAgICAgIHN3YXBCeXRlcyh1dWlkLCA2LCA3KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2FwQnl0ZXMoYnl0ZXMsIHBvczEsIHBvczIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBieXRlc1twb3MxXTtcbiAgICAgICAgYnl0ZXNbcG9zMV0gPSBieXRlc1twb3MyXTtcbiAgICAgICAgYnl0ZXNbcG9zMl0gPSB0ZW1wO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUFJDb250ZW50UHJvdGVjdGlvbihwcm90ZWN0aW9uSGVhZGVyKSB7XG4gICAgICAgIGxldCBwcm8gPSB7XG4gICAgICAgICAgICBfX3RleHQ6IHByb3RlY3Rpb25IZWFkZXIuZmlyc3RDaGlsZC5kYXRhLFxuICAgICAgICAgICAgX19wcmVmaXg6ICdtc3ByJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NoZW1lSWRVcmk6ICd1cm46dXVpZDo5YTA0ZjA3OS05ODQwLTQyODYtYWI5Mi1lNjViZTA4ODVmOTUnLFxuICAgICAgICAgICAgdmFsdWU6ICdjb20ubWljcm9zb2Z0LnBsYXlyZWFkeScsXG4gICAgICAgICAgICBwcm86IHBybyxcbiAgICAgICAgICAgIHByb19hc0FycmF5OiBwcm9cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVXaWRldmluZUNvbnRlbnRQcm90ZWN0aW9uKHByb3RlY3Rpb25IZWFkZXIsIEtJRCkge1xuICAgICAgICAvLyBDcmVhdGUgV2lkZXZpbmUgQ0VOQyBoZWFkZXIgKFByb3RvY29sIEJ1ZmZlcikgd2l0aCBLSUQgdmFsdWVcbiAgICAgICAgbGV0IHd2Q2VuY0hlYWRlciA9IG5ldyBVaW50OEFycmF5KDIgKyBLSUQubGVuZ3RoKTtcbiAgICAgICAgd3ZDZW5jSGVhZGVyWzBdID0gMHgxMjtcbiAgICAgICAgd3ZDZW5jSGVhZGVyWzFdID0gMHgxMDtcbiAgICAgICAgd3ZDZW5jSGVhZGVyLnNldChLSUQsIDIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIHBzc2ggYm94XG4gICAgICAgIGxldCBsZW5ndGggPSAxMiAvKiBib3ggbGVuZ3RoLCB0eXBlLCB2ZXJzaW9uIGFuZCBmbGFncyAqLyArIDE2IC8qIFN5c3RlbUlEICovICsgNCAvKiBkYXRhIGxlbmd0aCAqLyArIHd2Q2VuY0hlYWRlci5sZW5ndGg7XG4gICAgICAgIGxldCBwc3NoID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIC8vIFNldCBib3ggbGVuZ3RoIHZhbHVlXG4gICAgICAgIHBzc2hbaSsrXSA9IChsZW5ndGggJiAweEZGMDAwMDAwKSA+PiAyNDtcbiAgICAgICAgcHNzaFtpKytdID0gKGxlbmd0aCAmIDB4MDBGRjAwMDApID4+IDE2O1xuICAgICAgICBwc3NoW2krK10gPSAobGVuZ3RoICYgMHgwMDAwRkYwMCkgPj4gODtcbiAgICAgICAgcHNzaFtpKytdID0gKGxlbmd0aCAmIDB4MDAwMDAwRkYpO1xuXG4gICAgICAgIC8vIFNldCB0eXBlICgncHNzaCcpLCB2ZXJzaW9uICgwKSBhbmQgZmxhZ3MgKDApXG4gICAgICAgIHBzc2guc2V0KFsweDcwLCAweDczLCAweDczLCAweDY4LCAweDAwLCAweDAwLCAweDAwLCAweDAwXSwgaSk7XG4gICAgICAgIGkgKz0gODtcblxuICAgICAgICAvLyBTZXQgU3lzdGVtSUQgKCdlZGVmOGJhOS03OWQ2LTRhY2UtYTNjOC0yN2RjZDUxZDIxZWQnKVxuICAgICAgICBwc3NoLnNldChbMHhlZCwgMHhlZiwgMHg4YiwgMHhhOSwgIDB4NzksIDB4ZDYsIDB4NGEsIDB4Y2UsIDB4YTMsIDB4YzgsIDB4MjcsIDB4ZGMsIDB4ZDUsIDB4MWQsIDB4MjEsIDB4ZWRdLCBpKTtcbiAgICAgICAgaSArPSAxNjtcblxuICAgICAgICAvLyBTZXQgZGF0YSBsZW5ndGggdmFsdWVcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweEZGMDAwMDAwKSA+PiAyNDtcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweDAwRkYwMDAwKSA+PiAxNjtcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweDAwMDBGRjAwKSA+PiA4O1xuICAgICAgICBwc3NoW2krK10gPSAod3ZDZW5jSGVhZGVyLmxlbmd0aCAmIDB4MDAwMDAwRkYpO1xuXG4gICAgICAgIC8vIENvcHkgV2lkZXZpbmUgQ0VOQyBoZWFkZXJcbiAgICAgICAgcHNzaC5zZXQod3ZDZW5jSGVhZGVyLCBpKTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIEJBU0U2NCBzdHJpbmdcbiAgICAgICAgcHNzaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgcHNzaCk7XG4gICAgICAgIHBzc2ggPSBCQVNFNjQuZW5jb2RlQVNDSUkocHNzaCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOnV1aWQ6ZWRlZjhiYTktNzlkNi00YWNlLWEzYzgtMjdkY2Q1MWQyMWVkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnY29tLndpZGV2aW5lLmFscGhhJyxcbiAgICAgICAgICAgIHBzc2g6IHtcbiAgICAgICAgICAgICAgICBfX3RleHQ6IHBzc2hcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTWFuaWZlc3QoeG1sRG9jLCBtYW5pZmVzdExvYWRlZFRpbWUpIHtcbiAgICAgICAgbGV0IG1hbmlmZXN0ID0ge307XG4gICAgICAgIGxldCBjb250ZW50UHJvdGVjdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IHNtb290aFN0cmVhbWluZ01lZGlhID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdTbW9vdGhTdHJlYW1pbmdNZWRpYScpWzBdO1xuICAgICAgICBsZXQgcHJvdGVjdGlvbiA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUHJvdGVjdGlvbicpWzBdO1xuICAgICAgICBsZXQgcHJvdGVjdGlvbkhlYWRlciA9IG51bGw7XG4gICAgICAgIGxldCBwZXJpb2QsXG4gICAgICAgICAgICBhZGFwdGF0aW9ucyxcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uLFxuICAgICAgICAgICAgS0lELFxuICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0LFxuICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgc2VnbWVudHMsXG4gICAgICAgICAgICB0aW1lc2NhbGUsXG4gICAgICAgICAgICBpLCBqO1xuXG4gICAgICAgIC8vIFNldCBtYW5pZmVzdCBub2RlIHByb3BlcnRpZXNcbiAgICAgICAgbWFuaWZlc3QucHJvdG9jb2wgPSAnTVNTJztcbiAgICAgICAgbWFuaWZlc3QucHJvZmlsZXMgPSAndXJuOm1wZWc6ZGFzaDpwcm9maWxlOmlzb2ZmLWxpdmU6MjAxMSc7XG4gICAgICAgIG1hbmlmZXN0LnR5cGUgPSBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ0lzTGl2ZScpID09PSAnVFJVRScgPyAnZHluYW1pYycgOiAnc3RhdGljJztcbiAgICAgICAgdGltZXNjYWxlID0gIHNtb290aFN0cmVhbWluZ01lZGlhLmdldEF0dHJpYnV0ZSgnVGltZVNjYWxlJyk7XG4gICAgICAgIG1hbmlmZXN0LnRpbWVzY2FsZSA9IHRpbWVzY2FsZSA/IHBhcnNlRmxvYXQodGltZXNjYWxlKSA6IERFRkFVTFRfVElNRV9TQ0FMRTtcbiAgICAgICAgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPSBwYXJzZUZsb2F0KHNtb290aFN0cmVhbWluZ01lZGlhLmdldEF0dHJpYnV0ZSgnRFZSV2luZG93TGVuZ3RoJykpIC8gbWFuaWZlc3QudGltZXNjYWxlO1xuICAgICAgICBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uID0gKHBhcnNlRmxvYXQoc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0QXR0cmlidXRlKCdEdXJhdGlvbicpKSA9PT0gMCkgPyBJbmZpbml0eSA6IHBhcnNlRmxvYXQoc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0QXR0cmlidXRlKCdEdXJhdGlvbicpKSAvIG1hbmlmZXN0LnRpbWVzY2FsZTtcbiAgICAgICAgbWFuaWZlc3QubWluQnVmZmVyVGltZSA9IG1lZGlhUGxheWVyTW9kZWwuZ2V0U3RhYmxlQnVmZmVyVGltZSgpO1xuICAgICAgICBtYW5pZmVzdC50dG1sVGltZUlzUmVsYXRpdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgbGl2ZSBzdHJlYW1zLCBzZXQgYXZhaWxhYmlsaXR5U3RhcnRUaW1lIHByb3BlcnR5IGFjY29yZGluZyB0byBEVlJXaW5kb3dMZW5ndGhcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdkeW5hbWljJykge1xuICAgICAgICAgICAgbWFuaWZlc3QuYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gbmV3IERhdGUobWFuaWZlc3RMb2FkZWRUaW1lLmdldFRpbWUoKSAtIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCAqIDEwMDApKTtcbiAgICAgICAgICAgIG1hbmlmZXN0LnJlZnJlc2hNYW5pZmVzdE9uU3dpdGNoVHJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgbWFuaWZlc3QuZG9Ob3RVcGRhdGVEVlJXaW5kb3dPbkJ1ZmZlclVwZGF0ZWQgPSB0cnVlOyAvLyBkb25lIGJ5IE1zcyBmcmFnbWVudCBwcm9jZXNzb3JcbiAgICAgICAgICAgIG1hbmlmZXN0Lmlnbm9yZVBvc3Rwb25lVGltZVBlcmlvZCA9IHRydWU7IC8vIGluIE1zcywgbWFuaWZlc3QgaXMgbmV2ZXIgdXBkYXRlZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFwIHBlcmlvZCBub2RlIHRvIG1hbmlmZXN0IHJvb3Qgbm9kZVxuICAgICAgICBtYW5pZmVzdC5QZXJpb2QgPSBtYXBQZXJpb2Qoc21vb3RoU3RyZWFtaW5nTWVkaWEsIG1hbmlmZXN0LnRpbWVzY2FsZSk7XG4gICAgICAgIG1hbmlmZXN0LlBlcmlvZF9hc0FycmF5ID0gW21hbmlmZXN0LlBlcmlvZF07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwZXJpb2Qgc3RhcnQgdGltZVxuICAgICAgICBwZXJpb2QgPSBtYW5pZmVzdC5QZXJpb2Q7XG4gICAgICAgIHBlcmlvZC5zdGFydCA9IDA7XG5cbiAgICAgICAgLy8gQ29udGVudFByb3RlY3Rpb24gbm9kZVxuICAgICAgICBpZiAocHJvdGVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm90ZWN0aW9uSGVhZGVyID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQcm90ZWN0aW9uSGVhZGVyJylbMF07XG5cbiAgICAgICAgICAgIC8vIFNvbWUgcGFja2FnZXJzIHB1dCBuZXdsaW5lcyBpbnRvIHRoZSBQcm90ZWN0aW9uSGVhZGVyIGJhc2U2NCBzdHJpbmcsIHdoaWNoIGlzIG5vdCBnb29kXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHRoaXMgY2Fubm90IGJlIGNvcnJlY3RseSBwYXJzZWQuIExldCdzIGp1c3QgZmlsdGVyIG91dCBhbnkgbmV3bGluZXMgZm91bmQgaW4gdGhlcmUuXG4gICAgICAgICAgICBwcm90ZWN0aW9uSGVhZGVyLmZpcnN0Q2hpbGQuZGF0YSA9IHByb3RlY3Rpb25IZWFkZXIuZmlyc3RDaGlsZC5kYXRhLnJlcGxhY2UoL1xcbnxcXHIvZywgJycpO1xuXG4gICAgICAgICAgICAvLyBHZXQgS0lEIChpbiBDRU5DIGZvcm1hdCkgZnJvbSBwcm90ZWN0aW9uIGhlYWRlclxuICAgICAgICAgICAgS0lEID0gZ2V0S0lERnJvbVByb3RlY3Rpb25IZWFkZXIocHJvdGVjdGlvbkhlYWRlcik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBDb250ZW50UHJvdGVjdGlvbiBmb3IgUGxheVJlYWR5XG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvbiA9IGNyZWF0ZVBSQ29udGVudFByb3RlY3Rpb24ocHJvdGVjdGlvbkhlYWRlcik7XG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvblsnY2VuYzpkZWZhdWx0X0tJRCddID0gS0lEO1xuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb25zLnB1c2goY29udGVudFByb3RlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgQ29udGVudFByb3RlY3Rpb24gZm9yIFdpZGV2aW5lIChhcyBhIENFTkMgcHJvdGVjdGlvbilcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uID0gY3JlYXRlV2lkZXZpbmVDb250ZW50UHJvdGVjdGlvbihwcm90ZWN0aW9uSGVhZGVyLCBLSUQpO1xuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb25bJ2NlbmM6ZGVmYXVsdF9LSUQnXSA9IEtJRDtcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9ucy5wdXNoKGNvbnRlbnRQcm90ZWN0aW9uKTtcblxuICAgICAgICAgICAgbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb24gPSBjb250ZW50UHJvdGVjdGlvbnM7XG4gICAgICAgICAgICBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5ID0gY29udGVudFByb3RlY3Rpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRhcHRhdGlvbnMgPSBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhZGFwdGF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLmluaXRpYWxpemF0aW9uID0gJyRCYW5kd2lkdGgkJztcbiAgICAgICAgICAgIC8vIFByb3BhZ2F0ZSBjb250ZW50IHByb3RlY3Rpb24gaW5mb3JtYXRpb24gaW50byBlYWNoIGFkYXB0YXRpb25cbiAgICAgICAgICAgIGlmIChtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvbnNbaV0uQ29udGVudFByb3RlY3Rpb24gPSBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbjtcbiAgICAgICAgICAgICAgICBhZGFwdGF0aW9uc1tpXS5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5ID0gbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb25fYXNBcnJheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdkeW5hbWljJykge1xuICAgICAgICAgICAgICAgIC8vIE1hdGNoIHRpbWVTaGlmdEJ1ZmZlckRlcHRoIHRvIHZpZGVvIHNlZ21lbnQgdGltZWxpbmUgZHVyYXRpb25cbiAgICAgICAgICAgICAgICBpZiAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLmNvbnRlbnRUeXBlID09PSAndmlkZW8nICYmXG4gICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID4gYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZS5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoIDwgbWFuaWZlc3QubWluQnVmZmVyVGltZSkge1xuICAgICAgICAgICAgbWFuaWZlc3QubWluQnVmZmVyVGltZSA9IG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVsZXRlIENvbnRlbnQgUHJvdGVjdGlvbiB1bmRlciByb290IG1hbmlmZXN0IG5vZGVcbiAgICAgICAgZGVsZXRlIG1hbmlmZXN0LkNvbnRlbnRQcm90ZWN0aW9uO1xuICAgICAgICBkZWxldGUgbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb25fYXNBcnJheTtcblxuICAgICAgICAvLyBJbiBjYXNlIG9mIFZPRCBzdHJlYW1zLCBjaGVjayBpZiBzdGFydCB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICAgIC8vIFRoZW4gZGV0ZXJtaW5lIHRpbWVzdGFtcCBvZmZzZXQgYWNjb3JkaW5nIHRvIGhpZ2hlciBhdWRpby92aWRlbyBzdGFydCB0aW1lXG4gICAgICAgIC8vICh1c2UgY2FzZSA9IGxpdmUgc3RyZWFtIGRlbGluZWFyaXphdGlvbilcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRhcHRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICdhdWRpbycgfHwgYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gc2VnbWVudHNbMF0udCAvIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXBPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0ID0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcE9mZnNldCA9IE1hdGgubWluKHRpbWVzdGFtcE9mZnNldCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCBjb250ZW50IGR1cmF0aW9uIGFjY29yZGluZyB0byBtaW5pbXVtIGFkYXB0YXRpb24ncyBzZWdtZW50cyBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciB0byBmb3JjZSA8dmlkZW8+IGVsZW1lbnQgc2VuZGluZyAnZW5kZWQnIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0Lm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24gPSBNYXRoLm1pbihtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uLCBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBhdGNoIHNlZ21lbnQgdGVtcGxhdGVzIHRpbWVzdGFtcHMgYW5kIGRldGVybWluZSBwZXJpb2Qgc3RhcnQgdGltZSAoc2luY2UgYXVkaW8vdmlkZW8gc2hvdWxkIG5vdCBiZSBhbGlnbmVkIHRvIDApXG4gICAgICAgICAgICBpZiAodGltZXN0YW1wT2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhZGFwdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuU19hc0FycmF5O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc2VnbWVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VnbWVudHNbal0udE1hbmlmZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHNbal0udE1hbmlmZXN0ID0gc2VnbWVudHNbal0udDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzW2pdLnQgLT0gKHRpbWVzdGFtcE9mZnNldCAqIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ2F1ZGlvJyB8fCBhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kLnN0YXJ0ID0gTWF0aC5tYXgoc2VnbWVudHNbMF0udCwgcGVyaW9kLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5wcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gcGVyaW9kLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBlcmlvZC5zdGFydCAvPSBtYW5pZmVzdC50aW1lc2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uID0gTWF0aC5mbG9vcihtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uICogMTAwMCkgLyAxMDAwO1xuICAgICAgICBwZXJpb2QuZHVyYXRpb24gPSBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiBtYW5pZmVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZURPTShkYXRhKSB7XG5cbiAgICAgICAgbGV0IHhtbERvYyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ET01QYXJzZXIpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L3htbCcpO1xuICAgICAgICAgICAgaWYgKHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJzaW5nIHRoZSBtYW5pZmVzdCBmYWlsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB4bWxEb2M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hlcnMoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElyb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludGVybmFsUGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgeG1sRG9jID0gbnVsbDtcbiAgICAgICAgbGV0IG1hbmlmZXN0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgICAgLy8gUGFyc2UgdGhlIE1TUyBYTUwgbWFuaWZlc3RcbiAgICAgICAgeG1sRG9jID0gcGFyc2VET00oZGF0YSk7XG5cbiAgICAgICAgY29uc3QgeG1sUGFyc2VUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAgIGlmICh4bWxEb2MgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCBNU1MgbWFuaWZlc3QgaW50byBEQVNIIG1hbmlmZXN0XG4gICAgICAgIG1hbmlmZXN0ID0gcHJvY2Vzc01hbmlmZXN0KHhtbERvYywgbmV3IERhdGUoKSk7XG5cbiAgICAgICAgY29uc3QgbXNzMmRhc2hUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAgIGxvZygnUGFyc2luZyBjb21wbGV0ZTogKHhtbFBhcnNpbmc6ICcgKyAoeG1sUGFyc2VUaW1lIC0gc3RhcnRUaW1lKS50b1ByZWNpc2lvbigzKSArICdtcywgbXNzMmRhc2g6ICcgKyAobXNzMmRhc2hUaW1lIC0geG1sUGFyc2VUaW1lKS50b1ByZWNpc2lvbigzKSArICdtcywgdG90YWw6ICcgKyAoKG1zczJkYXNoVGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKS50b1ByZWNpc2lvbigzKSArICdzKScpO1xuXG4gICAgICAgIHJldHVybiBtYW5pZmVzdDtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgcGFyc2U6IGludGVybmFsUGFyc2UsXG4gICAgICAgIGdldE1hdGNoZXJzOiBnZXRNYXRjaGVycyxcbiAgICAgICAgZ2V0SXJvbjogZ2V0SXJvblxuICAgIH07XG5cbiAgICBzZXR1cCgpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5Nc3NQYXJzZXIuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc1BhcnNlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NQYXJzZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIERhdGFDaHVuayB7XG4gICAgLy9SZXByZXNlbnRzIGEgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBrZWVwIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm8gYWJvdXQgYSBzaW5nbGUgaW5pdC9tZWRpYSBzZWdtZW50XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtSWQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lZGlhSW5mbyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VnbWVudFR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLnF1YWxpdHkgPSBOYU47XG4gICAgICAgIHRoaXMuaW5kZXggPSBOYU47XG4gICAgICAgIHRoaXMuYnl0ZXMgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gTmFOO1xuICAgICAgICB0aGlzLmVuZCA9IE5hTjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE5hTjtcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRGcmFnbWVudCA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhQ2h1bms7IiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIEZyYWdtZW50UmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gRnJhZ21lbnRSZXF1ZXN0LkFDVElPTl9ET1dOTE9BRDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBOYU47XG4gICAgICAgIHRoaXMubWVkaWFUeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZWRpYUluZm8gPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTmFOO1xuICAgICAgICB0aGlzLnRpbWVzY2FsZSA9IE5hTjtcbiAgICAgICAgdGhpcy5yYW5nZSA9IG51bGw7XG4gICAgICAgIHRoaXMudXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RTdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Qnl0ZURhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RFbmREYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdWFsaXR5ID0gTmFOO1xuICAgICAgICB0aGlzLmluZGV4ID0gTmFOO1xuICAgICAgICB0aGlzLmF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYXZhaWxhYmlsaXR5RW5kVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMud2FsbFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSBOYU47XG4gICAgICAgIHRoaXMuYnl0ZXNUb3RhbCA9IE5hTjtcbiAgICAgICAgdGhpcy5kZWxheUxvYWRpbmdUaW1lID0gTmFOO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHRoaXMucmVwcmVzZW50YXRpb25JZCA9IG51bGw7XG4gICAgfVxufVxuXG5GcmFnbWVudFJlcXVlc3QuQUNUSU9OX0RPV05MT0FEID0gJ2Rvd25sb2FkJztcbkZyYWdtZW50UmVxdWVzdC5BQ1RJT05fQ09NUExFVEUgPSAnY29tcGxldGUnO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudFJlcXVlc3Q7XG4iXX0=
